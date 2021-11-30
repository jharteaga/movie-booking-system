const router = require('express').Router({ mergeParams: true })
const { validate } = require('../utils/JoiSchemas')

const {
  postPurchase,
  getPurchasesByUser
} = require('../controllers/purchaseControllers')

router.get('/', getPurchasesByUser).post('/', validate('payment'), postPurchase)

module.exports = router
