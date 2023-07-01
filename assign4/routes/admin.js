const express = require('express')
const router = express.Router()
const path = require('path')
const rootPath = require('../utils/rootPath.js')

const listUsers = []
router.get('/', (req, res, next) => {
  console.log(listUsers)
  const filePath = path.join(rootPath, 'views', 'index.ejs')
  res.render(filePath)
})

router.post('/', (req, res, next) => {
  listUsers.push({name: req.body.name})
  res.redirect('/users')
})

exports.router = router
exports.listUsers = listUsers