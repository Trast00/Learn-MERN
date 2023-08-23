import express from 'express'
const router = express.Router()
import * as petsController from '../controllers/pet.js'

router.use('/pets', petsController.getAll)

export default router