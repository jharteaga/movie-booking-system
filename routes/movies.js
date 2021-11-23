const router = require('express').Router({ mergeParams: true })

const {
  getMovies,
  getMovie,
  postMovie
} = require('../controllers/movieControllers')
const seatsRouter = require('./seats')

router
  .get('/', getMovies)
  .get('/:movieId', getMovie)
  .use('/:movieId/seats', seatsRouter)
  .post('/', postMovie)

module.exports = router
