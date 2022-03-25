import express from 'express'
const router = express.Router()

import htmlRouter from './htmlRouter'

router.use('/html', htmlRouter)

export default router
