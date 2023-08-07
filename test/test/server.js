require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const path = require('path')
const VSchema = require('./mdb.cjs')
const app = express()
const _path = path.join(__dirname, './dist')
// POST를 위한 구문
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// 스태틱경로
app.use('/', express.static(_path))
// 로그 INFO
app.use(logger('tiny'))
// ====MongoDB CRUD====
// CRUD에서 Create
app.post('/dbc', (req, res) => {
  const content = req.body.content
  ;(() => {
    const _data = { content }
    new VSchema(_data).save()
    res.send('입력완료')
  })()
})
app.listen(3000, () => {
  console.log('3000포트에서 서버 동작중...')
})
