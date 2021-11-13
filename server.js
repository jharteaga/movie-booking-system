const express = require('express')
const app = express()

const connection = require('./db/connection.js')

connection.once('open', () => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server listening on http://${process.env.HOST}:${process.env.PORT}`
    )
  })
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send('Server up and running')
})
