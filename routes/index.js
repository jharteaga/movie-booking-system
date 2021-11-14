const router = require('express').Router({ mergeParams: true })

const movieRouter = require('./movies')
const userRouter = require('./users')

router.use('/movies', movieRouter)
router.use('/users', userRouter)
// router.use('/*', (req, res, next) => next('error'))

module.exports = router
