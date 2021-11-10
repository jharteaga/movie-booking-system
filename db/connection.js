const mongoose = require('mongoose')

require('dotenv').config()

const mongoDB = process.env.DB_CONNECTION
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Database connected...'))
  .catch((err) => console.log('Error connecting to the database...', err))

module.exports = mongoose.connection
