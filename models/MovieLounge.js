const mongoose = require('mongoose')

const movieLoungeSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: [true, 'Movie ID is missing']
  },
  showDate: {
    type: Date,
    required: [true, 'Movie date is missing']
  },
  showTime: {
    type: String,
    required: [true, 'Movie time is missing']
  },
  seats: {
    type: [[Boolean]],
    required: [true, 'Movie seats are missing']
  }
})

const MovieLounge = mongoose.model('MovieLounge', movieLoungeSchema)
module.exports = MovieLounge
