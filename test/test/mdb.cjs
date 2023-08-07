const mongoose = require('mongoose')
const VSchema = require('./schema.cjs')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'd1'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
console.log(mongodbURL)
mongoose.set('strictQuery', false)
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('스키마로드완료!!\nDB 접속완료!!'))
  .catch((e) => console.log(e))
module.exports = VSchema
