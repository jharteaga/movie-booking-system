const { Seat } = require('../models/Seat')
const Response = require('../utils/Response')

const getSeats = async (req, res) => {
  try {
    const seats = await Seat.findOne({
      movieId: req.params.movieId,
      showDate: req.query.showDate,
      showTime: req.query.showTime
    })

    if (!seats) return res.status(404).send('Seats not found')

    res.status(200).json(new Response({}, seats, []))
  } catch (err) {
    res.status(500).json(new Response({}, {}, [err]))
  }
}

const postSeats = (req, res) => {
  const seatData = {
    movieId: req.params.movieId,
    showDate: req.body.showDate,
    showTime: req.body.showTime,
    allSeats: req.body.allSeats
  }

  Seat.create(seatData)
    .then((result) =>
      res.status(201).json(new Response({}, result ? result : {}, []))
    )
    .catch((err) => res.status(500).json(new Response({}, {}, [err.response])))
}

const putSeats = (req, res) => {
  const seatsUpdated = {
    allSeats: req.body.allSeats
  }
  Seat.findByIdAndUpdate({ _id: req.params.seatId }, seatsUpdated)
    .exec()
    .then((results) => {
      res.status(204).json(new Response({}, results ? results : {}, []))
    })
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

module.exports = { getSeats, postSeats, putSeats }
