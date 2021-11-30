const router = require('express').Router({ mergeParams: true })

const {
  getUsers,
  getUser,
  postUser
} = require('../controllers/userControllers')
const purchaseRouter = require('../routes/purchase')

router
  .get('/', getUsers)
  .get('/:userId', getUser)
  .post('/', postUser)
  .use('/:userId/purchases', purchaseRouter)

module.exports = router
