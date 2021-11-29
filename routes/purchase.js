const router = require('express').Router({ mergeParams: true })
const { validate } = require('../utils/JoiSchemas')

const { postPurchase } = require('../controllers/purchaseControllers')

router.post('/', validate('payment'), postPurchase)

module.exports = router
