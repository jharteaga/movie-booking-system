const Joi = require('joi')
const validator = require('validator')
const Response = require('./Response')

const schemas = {
  payment: Joi.object({
    cardNumber: Joi.string()
      .empty('')
      .required()
      .trim()
      .length(16)
      .pattern(/^[0-9]{16}$/)
      .messages({
        'any.required': 'Required',
        'string.length': 'Invalid',
        'string.pattern.base': 'Invalid credit card'
      }),
    cardHolder: Joi.string()
      .empty('')
      .trim()
      .required()
      .min(2)
      .max(30)
      .messages({
        'any.required': 'Required',
        'string.min': 'Must have at least 2 characters',
        'string.max': 'Must not have more than 30 characters'
      }),
    expirationMonth: Joi.string()
      .empty('')
      .valid(
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
      )
      .required()
      .messages({
        'any.only': 'Invalid',
        'any.required': 'Required'
      }),
    expirationYear: Joi.string()
      .empty('')
      .valid('21', '22', '23', '24', '25', '26', '27', '28')
      .required()
      .messages({
        'any.only': 'Invalid',
        'any.required': 'Required'
      }),
    cvv: Joi.string()
      .empty('')
      .required()
      .trim()
      .length(3)
      .custom((value) => validator.isInt(value))
      .messages({
        'any.required': 'Required',
        'any.custom': 'Must be numeric',
        'string.length': '3 numbers'
      })
  })
}

const validate = (schema) => {
  return function (req, res, next) {
    const { error } = schemas[schema].validate(req.body[schema], {
      abortEarly: false
    })

    if (error) {
      res.status(400).json(new Response({}, {}, error.details))
    } else {
      next()
    }
  }
}

module.exports = { validate }
