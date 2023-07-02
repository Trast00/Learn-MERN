const express = require('express')
const router = express.Router()

const listUsers = []
router.get('/', (req, res, next) => {
  console.log(listUsers)
  res.render("index")
})

router.post('/', (req, res, next) => {
  listUsers.push({name: req.body.name})
  res.redirect('/users')
})

exports.router = router
exports.listUsers = listUsers