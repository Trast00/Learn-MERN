import express from 'express'
const router = express.Router()

import * as favoriteController from '../controllers/favorite.js'

router.get('/favorite', favoriteController.index)

export default router