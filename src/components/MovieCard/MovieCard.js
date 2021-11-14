import React from 'react'
import Button from 'react-bootstrap/Button'
import LikeButton from '../LikeButton/LikeButton'
import Rating from '../Rating/Rating'
import { Container } from './MovieCard.style'

const MovieCard = ({ data }) => {
  const handleMovieDetail = (data) => {
    console.log('Movie info: ' + data.title)
  }

  return (
    <Container backImg={data.imageUrl} onClick={() => handleMovieDetail(data)}>
      <div className="card__like">
        <LikeButton />
      </div>
      <div className="card">
        <p className="card__title">{data.title}</p>
        <p className="card__meta">
          {data.genres.map((genre) => `${genre} | `)}{' '}
          {new Date(data.releaseDate).getFullYear()}
        </p>
        <p className="card__overview">{data.overview}</p>
        <div className="card__footer">
          <Rating review={data.rating} />
          <Button variant="danger" size="sm">
            Buy Tickets
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default MovieCard
