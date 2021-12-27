const User = require('../models/User')
const Response = require('../utils/Response')

const getUsers = (req, res) => {
  User.find({})
    .then((results) => res.status(200).json(new Response({}, results, [])))
    .catch((err) => res.status(500).json(new Response({}, {}, [err])))
}

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId })

    if (!user)
      return res.status(404).send('User with the given id was not found')

    res.status(200).json(new Response({}, user, []))
  } catch (err) {
    res.status(500).json(new Response({}, {}, [err]))
  }
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
