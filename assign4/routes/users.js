const express = require('express')
const router = express.Router()
const path = require('path')
const rootPath = require('../utils/rootPath.js')

router.use('/', (req, res, next) => {
  const filePath = path.join(rootPath, 'views', 'users.ejs')
  res.render(filePath)
})

module.exports = router