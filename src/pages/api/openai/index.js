import { Configuration, OpenAIApi } from "openai"

const createPrompt = (ingredients, method) => {
  const prompt = `Write a ${method} recipe based on these ingredients and instructions:
  Ingredients:
  ${ingredients}
  
  Instructions:`
  return prompt

}

const createPromptForDalle = (recipe) => {
  const prompt = `Create a descriptive name for this recipe:
  ${recipe}`
  
  return prompt
}

const createPromptForUser = (history, personality) => {
  const prompt = `Instructions:
  ${history}
  Write a version of the recipe for someone with loves ${personality}:`

  return prompt
}

const createPromptForClimate = (result, ingredients) => {
  const prompt = `Ingredients:
  ${ingredients}
  Instructions:
  ${result}
  Write a version of the recipe that is climate conscious:`

  return prompt

}

const createPromptForPersonality = (history) => {
  const prompt = `Based on these likes, describe this person in 5 words:
  Likes:
  ${history}
  Description:
  `
  return prompt
}

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
      max_tokens: 400,
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
  const { query: {prompt, type, method} } = req

  let input = ''

  switch (type) {
    case 'INITIAL':
      input = createPrompt(prompt, method)
      break
    case 'CLIMATE':
      input = createPromptForClimate(prompt, method)
      break
    case 'PERSONALITY':
      input = createPromptForPersonality(prompt)
      break
    case 'PERSONAL':
      input = createPromptForUser(prompt, method)
      break
    case 'DALLE':
      input = createPromptForDalle(prompt)
      break
  }

  try {
    console.log(input)
    await textCompletion(input)
    .then((response) => {
      return res.status(200).json({ data: response })
    })
    .catch((err) => {
      res.status(401).json({
        error: `Error: ${err?.status} ${err?.message}`
      })
    })
  } catch (error) {
    return res.status(401).json({
      error: `Error: ${error?.status} ${error?.message}`
    })
  }
}

export default openaiHandler