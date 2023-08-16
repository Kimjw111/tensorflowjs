const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>cdnVue</title>
    </head>
    <body>
      <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  
      <div id="app">
      <ul>
      <li v-for='n in arr' :key='n'>{{n}}</li>
      </ul>
      </div>
  
      <script>
        const { createApp } = Vue
  
        createApp({
          setup() {
            return {
                arr:Array(100).fill(0).map((v,i)=>v=i)
            }
          }
        }).mount('#app')
      </script>
    </body>
  </html>
  `)
})
app.listen(3000, () => {
  console.log('listening on 3000')
})
