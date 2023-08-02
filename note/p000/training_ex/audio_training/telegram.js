require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const axios = require('axios')

// 텔레그램 봇 토큰
const TELEGRAM_TOKEN = process.env.bottk
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true })

// OpenAI API 키
const OPENAI_API_KEY = process.env.gpttk

// 텔레그램 봇 메시지 수신 처리
bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const userInput = msg.text

  try {
    // GPT-3.5-turbo를 사용하여 응답 생성
    const gptResponse = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: userInput,
        max_tokens: 150
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`
        }
      }
    )

    // GPT 응답을 텔레그램 봇을 통해 사용자에게 보냅니다.
    bot.sendMessage(chatId, gptResponse.data.choices[0].text)
  } catch (error) {
    console.error('Error:', error.message)
    bot.sendMessage(chatId, '요청 처리 중 오류가 발생했습니다.')
  }
})
