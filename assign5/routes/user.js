const express = require('express')
const router = express.Router()

const listUsers = [
  {
    id: 1,
    name: "Allassane",
  },
  {
    id: 2,
    name: "Trast00",
  },
  {
    id: 3,
    name: "Mathild",
  }
]

router.use('/users/:userId', (req, res, next) => {
  const user = listUsers[req.params.userId-1]
  req.currentUser = user
  console.log(`User id is ${user.id}, ${user.name}`)
  res.render('shops.ejs')
})

module.exports = router