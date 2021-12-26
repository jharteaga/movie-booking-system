const morgan = require('morgan')
const path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
let server

const connection = require('./db/connection.js')

dotenv.config()

if (process.env.NODE_ENV !== 'test') {
  connection.once('open', () => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server listening on port ${process.env.PORT || 8080}`)
    })
  })
} else {
  server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Server listening on port ${process.env.PORT || 8080}`)
  })
}

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require('./routes/index')
app.use('/api/v1', router)

app.use('/api/*', (req, res, next) => next('error'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

/**
 * Error Handler
 */
app.use((err, req, res, next) => {
  res.status(404).json({ error: 'resource not found' })
})

module.exports = server
