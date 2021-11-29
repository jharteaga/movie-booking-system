const router = require('express').Router({ mergeParams: true })

const {
  getSeats,
  postSeats,
  putSeats
} = require('../controllers/seatControllers')

router.get('/', getSeats).post('/', postSeats).put('/', putSeats)

module.exports = router
