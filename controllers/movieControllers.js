const Movie = require('../models/Movie')
const Response = require('../utils/Response')

const getMovies = (req, res) => {
  Movie.find({})
    .select('-videoUrl -kids')
    .then((results) => res.status(200).json(new Response({}, results, [])))
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

const getMovie = (req, res) => {
  Movie.findOne({ _id: req.params.movieId })
    .then((result) => {
      res.status(200).json(new Response({}, result, []))
    })
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

module.exports = {
  getMovie,
  getMovies
}
