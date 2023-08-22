import express from 'express'
const router = express.Router()
const petsController = require('../controllers/pet.js')

router.use('/pets', petsController.getAll /* (req, res, next) => {
  res.render('shops.ejs', {
    pageTitle: "Shop",
    listAnimals: listAnimals})
}*/)

module.exports = router