const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter the movie title'],
      minlength: 2,
      maxlength: 200
    },
    overview: {
      type: String,
      required: [true, 'Please enter the movie overview'],
      minlength: 2
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide the movie image']
    },
    videoUrl: {
      type: String,
      required: [true, 'Please provide the movie trailer']
    },
    genres: {
      type: [String],
      default: ['TBD'],
      required: [true, 'Please provide at least one genre']
    },
    rating: {
      type: Number,
      required: [true, 'Please provide the movie rating']
    },
    releaseDate: {
      type: Date,
      required: [true, 'Please provide the release date']
    }
  },
  { timestamp: true }
)

const Movie = new mongoose.model('Movie', movieSchema)
module.exports = Movie
