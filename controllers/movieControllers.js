const Movie = require('../models/Movie')
const Response = require('../utils/Response')

const getMovies = (req, res) => {
  Movie.find({})
    .select('-videoUrl -kids')
    .then((results) => res.status(200).json(new Response({}, results, [])))
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.movieId })

    if (!movie)
      return res.status(404).send('The movie with the given ID was not found')

    res.status(200).json(new Response({}, movie, []))
  } catch (err) {
    res.status(500).json(new Response({}, {}, [err]))
  }
}

module.exports = {
  getMovie,
  getMovies
}
