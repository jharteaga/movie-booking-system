const User = require('../models/User')
const Response = require('../utils/Response')

const getUsers = (req, res) => {
  User.find({})
    .then((results) => res.status(200).json(new Response({}, results, [])))
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

const getUser = (req, res) => {
  User.findOne({ _id: req.params.userId })
    .then((result) => {
      res.status(200).json(new Response({}, result, []))
    })
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

const likeMovie = (req, res) => {
  const likes = {
    movieLikes: req.body.movieLikes
  }

  User.findByIdAndUpdate({ _id: req.params.userId }, likes, { new: true })
    .exec()
    .then((results) => {
      res.status(204).json(new Response({}, results ? results : {}, []))
    })
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

module.exports = {
  getUsers,
  getUser,
  likeMovie
}
