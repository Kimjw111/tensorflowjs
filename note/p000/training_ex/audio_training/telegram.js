require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const axios = require('axios')

const TELEGRAM_TOKEN = process.env.bottk
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true })

const OPENAI_API_KEY = process.env.gpttk

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const userInput = msg.text

  try {
    const gptResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.'
          },
          {
            role: 'user',
            content: userInput
          }
        ]
      },
      {
        headers: {
          Authorization: 'Bearer ' + OPENAI_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    )
    if (gptResponse.data.choices && gptResponse.data.choices.length > 0) {
      const gptReply = gptResponse.data.choices[0].message.content
        .trim()
        .replace(/\n/g, ' ')
      bot.sendMessage(chatId, gptReply)
    } else {
      console.error('Error: Empty or invalid response from OpenAI API')
      bot.sendMessage(chatId, '요청 처리 중 오류가 발생했습니다.')
    }
  } catch (error) {
    console.error('Error:', error.message)
    bot.sendMessage(chatId, '요청 처리 중 오류가 발생했습니다.')
  }
})
