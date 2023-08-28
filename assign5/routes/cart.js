import express from 'express'
const router = express.Router()

import * as cartController from '../controllers/cart.js'

router.get('/cart', cartController.index)

export default router