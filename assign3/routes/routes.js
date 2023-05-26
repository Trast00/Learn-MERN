const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')
const route = express.Router()

route.get('/', (req, res, next) => {
  console.log('try to log main, mercy !')
  //res.sendFile(path.join(rootDir, 'views', 'index'))
})
