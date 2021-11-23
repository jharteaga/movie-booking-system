const Seat = require('../models/Seat')
const Response = require('../utils/Response')

const getSeats = (req, res) => {
  Seat.findOne({
    movieId: req.params.movieId,
    showDate: req.query.showDate,
    showTime: req.query.showTime
  })
    .then((results) => {
      console.log(results)
      res.status(200).json(new Response({}, results, []))
    })
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

module.exports = { getSeats }
