import express from 'express'
const router = express.Router()
import * as petsController from '../controllers/pet.js'

router.get('/pets', petsController.index)
router.get('/pets/add', petsController.add)
router.post('/pets/create', petsController.create)

export default router