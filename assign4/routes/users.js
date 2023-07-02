const express = require('express')
const router = express.Router()
const {listUsers} = require('../routes/admin.js')

router.get('/', (req, res, next) => {
  res.render("users", {pageTitle: "List Users:" , listUsers: listUsers})
})

module.exports = router