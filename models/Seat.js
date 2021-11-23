const mongoose = require('mongoose')

const seatSchema = new mongoose.Schema({
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
  allSeats: {
    type: [{ identifier: String, row: [Number] }],
    required: [true, 'Movie seats are missing']
  }
})

const Seat = mongoose.model('Seat', seatSchema)
module.exports = Seat
