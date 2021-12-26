const request = require('supertest')
const Movie = require('../../models/Movie')
const data = require('../../db/data/movieData.json')
let server

describe('/api/v1/movies', () => {
  const endpoint = '/api/v1/movies'

  beforeEach(() => {
    server = require('../../server')
  })

  afterEach(async () => {
    server.close()
    await Movie.deleteMany({})
  })

  describe('GET /', () => {
    it('should return all movies', async () => {
      await Movie.collection.insertMany(data)

      const res = await request(server).get(endpoint)

      expect(res.status).toBe(200)
      expect(res.body.data.length).toBe(5)
      expect(res.body.data.some((m) => m.title === 'Black Widow')).toBeTruthy()
    })
  })
})
