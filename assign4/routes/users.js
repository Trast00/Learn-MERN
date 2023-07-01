const express = require('express')
const router = express.Router()
const path = require('path')
const rootPath = require('../utils/rootPath.js')
const {listUsers} = require('../routes/admin.js')

router.get('/', (req, res, next) => {
  const filePath = path.join(rootPath, 'views', 'users.ejs')
  res.render(filePath, {pageTitle: "List Users:" , listUsers: listUsers})
})

module.exports = router