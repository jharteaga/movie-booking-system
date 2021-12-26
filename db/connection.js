const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const mongoDB =
  process.env.NODE_ENV !== 'test'
    ? process.env.DB_CONNECTION
    : process.env.DB_TEST_CONNECTION
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Database connected...'))
  .catch((err) => console.log('Error connecting to the database...', err))

module.exports = mongoose.connection
