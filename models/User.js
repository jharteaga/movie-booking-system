const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Provide first name'],
      minlength: 2,
      maxlength: 30
    },
    lastName: {
      type: String,
      required: [true, 'Provide last name'],
      minlength: 2,
      maxlength: 30
    },
    email: {
      type: String,
      required: [true, 'Provide an email'],
      minlength: 2,
      maxlength: 30
    },
    phoneNumber: {
      type: String,
      required: [true, 'Provide a phone number'],
      length: 10
    }
  },
  { timestamps: true }
)

const User = new mongoose.model('User', userSchema)
module.exports = User
