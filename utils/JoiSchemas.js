const Joi = require('joi')
const validator = require('validator')
const Response = require('./Response')

const schemas = {
  payment: Joi.object({
    cardNumber: Joi.string()
      .empty('')
      .required()
      .length(16)
      .custom((value) => validator.isCreditCard(value))
      .messages({
        'any.required': 'Required',
        'string.length': 'Invalid',
        'any.custom': 'Invalid'
      }),
    cardHolder: Joi.string()
      .empty('')
      .min(2)
      .max(30)
      .required()
      .custom((value) => validator.isAlpha(value))
      .messages({
        'any.required': 'Required',
        'string.min': 'Must have at least 2 characters',
        'string.max': 'Must not have more than 30 characters',
        'any.custom': 'Must have only letters'
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
      .length(3)
      .custom((value) => validator.isInt(value))
      .messages({
        'any.required': 'Required',
        'any.custom': 'Must be numeric',
        'string.length': 'Invalid'
      })
  })
}

const validate = (schema) => {
  return function (req, res, next) {
    const { value, error } = schemas[schema].validate(req.body, {
      abortEarly: false
    })

    if (error) {
      res.status(400).json(new Response({}, {}, error.details))
    } else {
      res.status(201).json(new Response({}, value, []))
    }
  }
}

module.exports = { validate }
