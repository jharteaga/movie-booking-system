const router = require('express').Router({ mergeParams: true })

const { getSeats } = require('../controllers/seatControllers')

router.get('/', getSeats)

module.exports = router
