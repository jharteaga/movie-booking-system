const mongoose = require('mongoose')

const seatSchema = new mongoose.Schema(
  {
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
      required: [true, 'Movie seats are missing'],
      set: setSeatsBooked
    }
  },
  { timestamps: true }
)

function setSeatsBooked(seats) {
  return seats.map((line) => {
    return {
      ...line,
      row: line.row.map((item) => (item === -1 ? 1 : item))
    }
  })
}

const Seat = mongoose.model('Seat', seatSchema)
module.exports = Seat
