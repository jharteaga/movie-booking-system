const request = require('supertest')
const mongoose = require('mongoose')
const User = require('../../models/User')
const Purchase = require('../../models/Purchase')
let server

describe('/api/v1/users', () => {
  const endpoint = '/api/v1/users'

  beforeEach(() => {
    server = require('../../server')
  })

  afterEach(async () => {
    server.close()
    await User.deleteMany({})
  })

  describe('GET /', () => {
    it('should return all users', async () => {
      await User.collection.insertMany([
        {
          firstName: 'aaa',
          lastName: 'bbb',
          email: 'c@test.com',
          phoneNumber: 'd'
        },
        {
          firstName: 'www',
          lastName: 'yyy',
          email: 'x@test.com',
          phoneNumber: 'z'
        }
      ])

      const res = await request(server).get(endpoint)

      expect(res.status).toBe(200)
      expect(res.body.data.length).toBe(2)
      expect(res.body.data.some((u) => u.firstName === 'aaa')).toBeTruthy()
    })
  })

  describe('GET /:userId', () => {
    it('should return a user if valid id is passed', async () => {
      const user = new User({
        firstName: 'aaa',
        lastName: 'bbb',
        email: 'c@test.com',
        phoneNumber: 'd'
      })
      await user.save()

      const res = await request(server).get(`${endpoint}/${user._id}`)

      expect(res.status).toBe(200)
      expect(res.body.data._id).toBeTruthy()
      expect(res.body.data).toHaveProperty('firstName', user.firstName)
      expect(res.body.data.firstName === 'aaa').toBeTruthy()
    })

    it('should return 404 if invalid id is passed', async () => {
      const res = await request(server).get(`${endpoint}/1`)

      expect(res.status).toBe(404)
    })

    it('should return 404 if no user with the given id exists', async () => {
      const id = mongoose.Types.ObjectId()
      const res = await request(server).get(`${endpoint}/${id}`)

      expect(res.status).toBe(404)
    })
  })

  describe('PUT /:userId/like', () => {
    it('should return 204 when like list of movies is updated', async () => {
      const movieLikes = ['1']
      const user = new User({
        firstName: 'aaa',
        lastName: 'bbb',
        email: 'c@test.com',
        phoneNumber: 'd'
      })
      await user.save()

      const res = await request(server)
        .put(`${endpoint}/${user._id}/like`)
        .send({ movieLikes })

      expect(res.status).toBe(204)
    })
  })

  describe('GET /:userId/purchases', () => {
    afterEach(async () => {
      await Purchase.deleteMany({})
    })

    it('should return all purchases by user id', async () => {
      const userId = mongoose.Types.ObjectId().toHexString()

      await Purchase.collection.insertMany([
        {
          userId,
          movieId: mongoose.Types.ObjectId().toHexString(),
          movieDate: '2021-12-24',
          movieTime: '7:00 PM',
          seats: ['A1'],
          total: 7.0,
          cardNumber: '11112222233334444',
          cardHolder: 'John',
          expirationDate: `0223`,
          cvv: '123'
        },
        {
          userId,
          movieId: mongoose.Types.ObjectId().toHexString(),
          movieDate: '2021-12-25',
          movieTime: '7:00 PM',
          seats: ['A2'],
          total: 7.0,
          cardNumber: '11112222233334444',
          cardHolder: 'Jane',
          expirationDate: `0224`,
          cvv: '321'
        }
      ])

      const res = await request(server).get(`${endpoint}/${userId}/purchases`)

      expect(res.status).toBe(200)
      expect(res.body.data.length).toBe(2)
      expect(res.body.data.some((p) => p.cardHolder === 'John')).toBeTruthy()
      expect(res.body.data.some((p) => p.cardHolder === 'Jane')).toBeTruthy()
    })
  })
})
