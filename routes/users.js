const router = require('express').Router({ mergeParams: true })

const {
  getUsers,
  getUser,
  postUser
} = require('../controllers/userControllers')

router.get('/', getUsers).get('/:id', getUser).post('/', postUser)

module.exports = router
