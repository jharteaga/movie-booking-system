import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import ReactPlayer from 'react-player/lazy'
import Rating from '../../components/Rating/Rating'
import { useHistory } from 'react-router-dom'
import { FaAngleLeft, FaTicketAlt } from 'react-icons/fa'
import { Container } from './MovieDetail.style'
import { api } from '../../config'

const MovieDetail = () => {
  const history = useHistory()
  const [movie, setMovie] = useState()

  useEffect(() => {
    const movieId = localStorage.getItem('movieIdSelected')
    axios
      .get(`${api.movie}/${movieId}`)
      .then(({ data: res }) => {
        setMovie(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleGoBack = () => {
    history.push('/')
  }

  return (
    <Container>
      {movie && (
        <>
          <div className="detail__header">
            <div className="detail__header__back" onClick={handleGoBack}>
              <FaAngleLeft />
            </div>
            <h2>{movie.title}</h2>
          </div>
          <div className="cta-desk-tickets">
            <Button variant="danger" size="lg">
              Book seats
            </Button>
          </div>
          <div className="cta-mob-tickets">
            <button className="bg-danger">
              {/* <FaTicketAlt /> */}
              Buy
            </button>
          </div>
          <div className="detail__image">
            <img src={movie.imageUrl} alt="" />
          </div>
          <div className="detail__info">
            <p className="releaseDate">
              <span>Release Date:</span>{' '}
              {new Date(movie.releaseDate).getFullYear()}
            </p>
            <p className="genres">
              <span>Genres: &nbsp;</span>
              {movie.genres.map((genre) => `${genre} | `)}
            </p>
            <div className="overview">
              <p>Overview:</p>
              <p>{movie.overview}</p>
            </div>
            <div className="rating">
              <p>Rating:</p>
              <Rating review={movie.rating} />
            </div>
          </div>
          <div className="trailer">
            <p>Watch the trailer:</p>
            <ReactPlayer
              className="trailer-video"
              url={movie.videoUrl}
              width="100%"
            />
          </div>
        </>
      )}
    </Container>
  )
}

export default MovieDetail
