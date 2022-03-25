import express from 'express'
const router = express.Router()

import htmlValidator from '../validators/htmlValidator'
import expressValidatorMiddleware from '../middleware/expressValidatorMiddleware'
import htmlController from '../controllers/htmlController'

router.post(
    '/create',
          htmlValidator.checkCreateHtml(),
          expressValidatorMiddleware.handleValidationError,
          htmlController.addOne
)


export default router
