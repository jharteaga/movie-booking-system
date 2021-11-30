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

const postUser = (req, res) => {
  res.send('create a new user')
}

module.exports = {
  getUsers,
  getUser,
  postUser
}
