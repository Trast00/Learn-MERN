const path = require('path')
const rootPath = require('../utils/rootPath')
const express = require('express')
const router = express.Router()

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', 'users.html'))
})

module.exports = router