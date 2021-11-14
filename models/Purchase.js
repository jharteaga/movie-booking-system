const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'User ID is missing']
  },
  movieId: {
    type: String,
    required: [true, 'Movie ID is missing']
  },
  movieDate: {
    type: Date,
    required: [true, 'Provide a date']
  },
  movieTime: {
    type: String,
    required: [true, 'provide a time']
  },
  seats: {
    type: [String],
    required: [true, 'provide at least one seat']
  },
  purchaseTotal: {
    type: Number,
    required: [true, 'Provide the purchase total']
  }
})

const Purchase = mongoose.model('Purchase', purchaseSchema)
module.exports = Purchase
