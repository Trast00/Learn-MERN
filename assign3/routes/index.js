const express = require('express');
const path = require('path')
const rootDir = require('../utils/path')
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

module.exports = router