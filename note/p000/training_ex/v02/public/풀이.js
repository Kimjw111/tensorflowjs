import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
  apiKey: process.env.VUE_APP_chatgpt
})
const openai = new OpenAIApi(configuration)
export async function gpt3(input) {
  const pmt = `Human:${input} \nAI:`
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: pmt,
    temperature: 1,
    max_tokens: 250,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: ['Human:', 'AI']
  })
  const answer = response.data.choices[0].text
  return answer
}
