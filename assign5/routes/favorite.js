import express from 'express'
const router = express.Router()

import * as favoriteController from '../controllers/favorite.js'

router.use('/favorites', favoriteController.index)
router.use('/favorites/create', favoriteController.create)

export default router