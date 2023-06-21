const express = require('express')
const router = express.Router()
const path = require('path')
const rootPath = require('../utils/rootPath')

router.get('/', (req, res, next)=> {
  const file = path.join(rootPath, 'views', 'index.html')
  res.sendFile(file)
})

module.exports= router