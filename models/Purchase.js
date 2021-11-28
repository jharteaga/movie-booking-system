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
  },
  cardNumber: {
    type: String,
    required: [true, 'Provide a card number']
  },
  cardHolder: {
    type: String,
    required: [true, 'Provide card holder name']
  },
  expirationDate: {
    type: String,
    required: [true, 'Provide expiration date']
  },
  cvv: {
    type: String,
    required: [true, 'Provide cvv']
  }
})

const Purchase = mongoose.model('Purchase', purchaseSchema)
module.exports = Purchase
