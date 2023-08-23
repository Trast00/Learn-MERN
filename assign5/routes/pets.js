import express from 'express'
const router = express.Router()
import * as petsController from '../controllers/pet.js'

router.use('/pets', petsController.getAll /* (req, res, next) => {
  res.render('shops.ejs', {
    pageTitle: "Shop",
    listAnimals: listAnimals})
}*/)

export default router