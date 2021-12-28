const Purchase = require('../models/Purchase')
const Response = require('../utils/Response')

const postPurchase = (req, res, next) => {
  const data = {
    userId: req.body.userId,
    movieId: req.params.movieId,
    movieDate: req.body.movie.date,
    movieTime: req.body.movie.time,
    seats: req.body.movie.seats,
    total: req.body.movie.total,
    cardNumber: req.body.payment.cardNumber,
    cardHolder: req.body.payment.cardHolder,
    expirationDate: `${req.body.payment.expirationMonth}${req.body.payment.expirationYear}`,
    cvv: req.body.payment.cvv
  }

  Purchase.create(data)
    .then((result) => {
      res.status(201).json(new Response({}, result, []))
    })
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

const getPurchasesByUser = async (req, res) => {
  try {
    const purchase = await Purchase.find({ userId: req.params.userId }).sort({
      createdAt: -1
    })

    res.status(200).json(new Response({}, purchase, []))
  } catch (err) {
    res.status(500).json(new Response({}, {}, [err]))
  }
}

module.exports = { getPurchasesByUser, postPurchase }
