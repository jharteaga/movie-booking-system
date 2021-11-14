import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player/lazy'
import { useHistory } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { Container } from './MovieDetail.style'
import { api } from '../../config'

const MovieDetail = ({ location: { movieId } }) => {
  const history = useHistory()
  const [movie, setMovie] = useState()

  useEffect(() => {
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
            <div className="trailer">
              <p>Watch the trailer:</p>
              <ReactPlayer
                className="trailer-video"
                url={movie.videoUrl}
                width="100%"
                height="300px"
              />
            </div>
          </div>
        </>
      )}
    </Container>
  )
}

export default MovieDetail
