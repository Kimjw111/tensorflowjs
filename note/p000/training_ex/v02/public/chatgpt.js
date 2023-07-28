import axios from 'axios'

export async function chatgptApi(prompt) {
  const REST_API_KEY = process.env.VUE_APP_chatgpt
  let rst = '생각중...'
  const url = 'https://api.openai.com/v1/chat/completions'
  const headers = {
    Authorization: 'Bearer ' + REST_API_KEY,
    'Content-Type': 'application/json'
  }
  const opt = {
    url,
    method: 'POST',
    data: {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    },
    headers,
    responseType: 'json'
  }
  await axios(opt).then((res) => {
    rst = res.data.choices[0].message.content
  })
  return rst
}
