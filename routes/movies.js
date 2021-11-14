const router = require('express').Router({ mergeParams: true })

const {
  getMovies,
  getMovie,
  postMovie
} = require('../controllers/movieControllers')

router.get('/', getMovies).get('/:id', getMovie).post('/', postMovie)

module.exports = router
