const request = require('supertest')
const mongoose = require('mongoose')
const Movie = require('../../models/Movie')
const { Seat } = require('../../models/Seat')
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
    await Seat.deleteMany({})
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

  describe('GET /:id/seats', () => {
    let id
    let showDate
    let showTime

    const exec = async () => {
      return await request(server).get(
        `/api/v1/movies/${id}/seats?showDate=${showDate}&showTime=${showTime}`
      )
    }

    beforeEach(async () => {
      showDate = '2021-12-24'
      showTime = '7:00 PM'

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
      id = movie._id
    })

    it('should return seats information by movie id', async () => {
      const seats = new Seat({
        movieId: id,
        showDate,
        showTime,
        allSeats: []
      })

      await seats.save()

      const res = await exec()

      expect(res.status).toBe(200)
      expect(res.body.data).toHaveProperty('showTime', showTime)
    })

    it('should return 404 if seats does not exists by movie id', async () => {
      const res = await exec()

      expect(res.status).toBe(404)
    })
  })

  describe('POST /:id/seats', () => {
    let id
    let seats

    const exec = async () => {
      return await request(server)
        .post(`/api/v1/movies/${id}/seats`)
        .send(seats)
    }

    beforeEach(async () => {
      showDate = '2021-12-24'
      showTime = '7:00 PM'

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
      id = movie._id
    })

    it('should save seats information by movie id', async () => {
      seats = { showDate, showTime, allSeats: [] }
      await exec()

      const seat = await Seat.findOne({ showDate: '2021-12-24' })

      expect(seat).not.toBeNull()
      expect(seat).toHaveProperty('_id')
    })

    it('should return seats information after saving', async () => {
      seats = { showDate, showTime, allSeats: [] }
      const res = await exec()

      expect(res.status).toBe(201)
      expect(res.body.data).toHaveProperty('_id')
      expect(res.body.data).toHaveProperty('showTime', showTime)
    })
  })

  describe('PUT /:id/seats/:seatId', () => {
    let allSeats = [
      { identifier: 'A', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'B', row: [0, -1, -1, 0, 0, 0, 0, 0] },
      { identifier: 'C', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'D', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'E', row: [0, 0, 0, 0, 0, 0, 0, 0] },
      { identifier: 'F', row: [0, 0, 0, 0, 0, 0, 0, 0] }
    ]
    let movieId
    let seatId

    const exec = async () => {
      return await request(server)
        .put(`/api/v1/movies/${movieId}/seats/${seatId}`)
        .send(allSeats)
    }

    beforeEach(async () => {
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
      movieId = movie._id

      const seat = new Seat({
        movieId: movieId,
        showDate: '2021-12-24',
        showTime: '7:00 PM',
        allSeats
      })

      await seat.save()
      seatId = seat._id
    })

    it('should update array of seats by movie id', async () => {
      allSeats = [
        { identifier: 'A', row: [0, 0, 0, 0, 0, 0, 0, 0] },
        { identifier: 'B', row: [0, 1, 1, 0, 0, 0, 0, 0] },
        { identifier: 'C', row: [0, 0, 0, 0, 0, 0, 0, 0] },
        { identifier: 'D', row: [0, 0, 0, 0, 0, 0, 0, 0] },
        { identifier: 'E', row: [0, 0, 0, 0, 0, 0, 0, 0] },
        { identifier: 'F', row: [0, 0, 0, 0, 0, 0, 0, 0] }
      ]
      await exec()

      const seats = await Seat.findOne({ _id: seatId })

      expect(seats).not.toBeNull()
      expect(seats.allSeats).toMatchObject(allSeats)
    })

    it('should return seats object when it is updated', async () => {
      allSeats = [
        { identifier: 'A', row: [0, 0, 0, 0, 0, 0, 0, 0] },
        { identifier: 'B', row: [0, 1, 1, 0, 0, 0, 0, 0] },
        { identifier: 'C', row: [0, 0, 0, 0, 0, 0, 0, 0] },
        { identifier: 'D', row: [0, 0, 0, 0, 0, 0, 0, 0] },
        { identifier: 'E', row: [0, 0, 0, 0, 0, 0, 0, 0] },
        { identifier: 'F', row: [0, 0, 0, 0, 0, 0, 0, 0] }
      ]
      const res = await exec()

      console.log(res.body)

      expect(res.status).toBe(204)
      expect(res.body).toMatchObject({})
    })
  })
})
