const express = require('express')
const router = express.Router()
const path = require('path')
const rootPath = require('../utils/rootPath.js')

router.get('/', (req, res, next) => {
  const filePath = path.join(rootPath, 'views', 'index.ejs')
  res.sendFile(filePath)
})