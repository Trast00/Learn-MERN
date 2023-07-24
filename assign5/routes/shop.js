const express = require('express')
const path = require('path')
const router = express.Router()

const listAnimals = [
  {
    id: 1,
    name: "Mouse",
    imgUrl: "aaa",
    ownerId: 1,
  },
  {
    id: 2,
    name: "Cat",
    imgUrl: "aaa",
    ownerId: 1,
  },
  {
    id: 3,
    name: "Pigeon",
    imgUrl: "aaa",
    ownerId: 2,
  }
]

router.use('/shops', (req, res, next) => {
  res.render('shops.ejs', {
    pageTitle: "Shop",
    listAnimals: listAnimals})
})

module.exports = router