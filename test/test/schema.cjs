const mongoose = require('mongoose')
const Schema = mongoose.Schema
const VSchema = new Schema({
  content: String
})
module.exports = mongoose.model('vdb', VSchema, 'vdb')
