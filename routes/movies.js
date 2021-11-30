const router = require('express').Router({ mergeParams: true })

const { getMovies, getMovie } = require('../controllers/movieControllers')
const seatsRouter = require('./seats')
const purchaseRouter = require('./purchase')

router
  .get('/', getMovies)
  .get('/:movieId', getMovie)
  .use('/:movieId/seats', seatsRouter)
  .use('/:movieId/purchase', purchaseRouter)

module.exports = router
