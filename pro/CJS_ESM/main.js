// CJS와 ESM 둘 다 쓰기
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
/*CJS*/
// const fs = require('fs')
const logger = require('morgan')

/*ESM */
import fs from 'fs' // ESM
import express from 'express'
// import logger from 'morgan'

const exC = require('./a.cjs')
console.log(exC)
// import { b1, b2 } from './b.mjs'
import * as esM from './b.mjs'
console.log(esM)

const app = express()
app.use(logger('tiny'))
fs.readdir('./', (e, list) => console.log(list))
app.listen(3000, () => {
  console.log('listening on 3000')
})
