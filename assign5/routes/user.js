const express = require('express')
const path = require('path')
const router = express.Router()

router.use('/users/:userId', (req, res, next) => {
  const id = req.params.userId
  console.log(`User id is ${id}`)
})

module.exports = router