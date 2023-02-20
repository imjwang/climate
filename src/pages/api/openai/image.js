import { Configuration, OpenAIApi } from "openai"

const imageGen = async (prompt) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  })
  
  const openai = new OpenAIApi(configuration)

  try {
    const response = await openai.createImage({
      prompt: prompt,
      response_format: "b64_json"
    })

    console.log(response.data)
    return response?.data
    
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
}
}

const imageGenHandler = async (req, res) => {
  const { query: {prompt} } = req
  try {
    await imageGen(prompt)
    .then((response) => {
      return res.status(200).json({ data: response })
    })
    .catch((err) => {
      res.status(401).json({
        error: `FAIL FAIL FAIL FAIL FAIL Error: ${err?.status} ${err?.message}`
      })
    })
  } catch (error) {
    return res.status(401).json({
      error: `FAIL ASDFASDFASDFASDFASDFASDFASDF Error: ${error?.status} ${error?.message}`
    })
  }
}

export default imageGenHandler