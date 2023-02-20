import { Configuration, OpenAIApi } from "openai"

const textCompletion = async (prompt) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  })
  
  const openai = new OpenAIApi(configuration)

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.3,
      max_tokens: 120,
    })
    console.log(response.data.choices[0].text)
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

const openaiHandler = async (req, res) => {
  const { query: {prompt} } = req
  try {
    await textCompletion(prompt)
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

// const openaiHandler = (req, res) => {
//   return res.status(200).json({ name: `User 2304829348239` })
// }

export default openaiHandler