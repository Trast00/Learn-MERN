import express from 'express'
const router = express.Router()

import * as favoriteController from '../controllers/favorite.js'

router.use('/favorites/create', favoriteController.create)
router.use('/favorites', favoriteController.index)

export default router