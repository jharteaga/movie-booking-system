const request = require('supertest')
const mongoose = require('mongoose')
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

  describe('GET /:id', () => {
    it('should return a movie if valid id is passed', async () => {
      const movie = new Movie({
        title: 'movie1',
        overview: 'description1',
        imageUrl: 'url',
        videoUrl: 'url',
        genres: ['Action'],
        rating: 3,
        releaseDate: '2021-09-30',
        kids: false
      })
      await movie.save()

      const res = await request(server).get(`${endpoint}/${movie._id}`)

      expect(res.status).toBe(200)
      expect(res.body.data._id).toBeTruthy()
      expect(res.body.data).toHaveProperty('title', movie.title)
      expect(res.body.data.title === 'movie1').toBeTruthy()
    })

    it('should return 404 if invalid id is passed', async () => {
      const res = await request(server).get(`${endpoint}/1`)

      expect(res.status).toBe(404)
    })

    it('should return 404 if no movie with the given id exists', async () => {
      const id = mongoose.Types.ObjectId()
      const res = await request(server).get(`${endpoint}/${id}`)

      expect(res.status).toBe(404)
    })
  })
})
