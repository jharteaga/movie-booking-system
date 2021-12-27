const request = require('supertest')
const mongoose = require('mongoose')
const User = require('../../models/User')
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
})
