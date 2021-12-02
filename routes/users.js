const router = require('express').Router({ mergeParams: true })

const {
  getUsers,
  getUser,
  likeMovie
} = require('../controllers/userControllers')
const purchasesRouter = require('./purchases')

router
  .get('/', getUsers)
  .get('/:userId', getUser)
  .put('/:userId/like', likeMovie)
  .use('/:userId/purchases', purchasesRouter)

module.exports = router
