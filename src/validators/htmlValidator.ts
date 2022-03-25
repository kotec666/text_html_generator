import { body } from 'express-validator'

class HtmlValidator {
  checkCreateHtml() {
    return [
      body('id')
          .notEmpty()
          .isString(),
      body('name')
          .notEmpty()
          .isString(),
      body('settings')
          .optional()
          .isObject(),
      body('type')
          .notEmpty()
          .isString(),
      body('children')
          .notEmpty()
          .isArray({min: 1}),
    ]
  }
}

export default new HtmlValidator()
