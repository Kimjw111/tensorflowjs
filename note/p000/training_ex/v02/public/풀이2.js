import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
  apiKey: process.env.VUE_APP_chatgpt
})
const openai = new OpenAIApi(configuration)
export async function gpt3(input) {
  const pmt = `${input}`
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: '너는 편의점 알바생이야'
      },
      { role: 'system', content: '40대 남성' },
      { role: 'user', content: '담배주세요' },
      {
        role: 'assistant',
        content: '미성년자는 안됩니다. 신분증을 보여주세요'
      },
      { role: 'user', content: `${pmt}` }
    ]
  })
  const answer = response.data.choices[0].message.content
  return answer
}
