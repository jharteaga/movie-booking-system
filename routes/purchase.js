const router = require('express').Router({ mergeParams: true })
const { validate } = require('../utils/JoiSchemas')

// const { postMovie } = require('../controllers/purchaseController')

router.post('/', validate('payment'))

module.exports = router
