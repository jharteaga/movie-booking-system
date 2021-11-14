const Movie = require('../models/Movie')
const Response = require('../utils/Response')

const getMovies = (req, res) => {
  Movie.find({})
    .then((results) => res.status(200).json(new Response({}, results, [])))
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

const getMovie = (req, res) => {
  Movie.findOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json(new Response({}, result, []))
    })
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

const postMovie = (req, res) => {
  res.send('create a new movie')
}

module.exports = {
  getMovie,
  getMovies,
  postMovie
}
