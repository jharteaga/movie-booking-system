import React from 'react'
import Button from 'react-bootstrap/Button'
import LikeButton from '../LikeButton/LikeButton'
import Rating from '../Rating/Rating'
import { Container } from './MovieCard.style'

const MovieCard = () => {
  return (
    <Container>
      <div className="card__like">
        <LikeButton />
      </div>
      <div className="card">
        <p className="card__title">Avengers - Endgame</p>
        <p className="card__meta">Action, Aventure, Drama | 2019</p>
        <p className="card__overview">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsum
          eaque ratione repudiandae, deserunt tempora magni, libero expedita
          aperiam doloremque mollitia, labore dicta fugit adipisci.
        </p>
        <div className="card__footer">
          <Rating review={4} />
          <Button variant="danger" size="sm">
            Buy Tickets
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default MovieCard
