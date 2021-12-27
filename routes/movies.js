const router = require('express').Router({ mergeParams: true })

const { getMovies, getMovie } = require('../controllers/movieControllers')
const seatsRouter = require('./seats')
const purchaseRouter = require('./purchases')
const validateObjectId = require('../middleware/validateObjectId')

router
  .get('/', getMovies)
  .get('/:movieId', validateObjectId('movieId'), getMovie)
  .use('/:movieId/seats', seatsRouter)
  .use('/:movieId/purchases', purchaseRouter)

module.exports = router
