const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const mongoDB = process.env.DB_CONNECTION
mongoose
  .connect(mongoDB)
  .then((res) => console.log('Database connected...'))
  .catch((err) => console.log('Error connecting to the database...', err))

module.exports = mongoose.connection
