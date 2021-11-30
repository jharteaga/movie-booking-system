import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import LikeButton from '../LikeButton/LikeButton'
import Rating from '../Rating/Rating'
import { UserContext } from '../../context/user/UserContext'
import { Container } from './MovieCard.style'
import { api } from '../../config'

const MovieCard = ({ data, onSelect, onChange }) => {
  const { user, updateLikes } = useContext(UserContext)
  const [liked, setLike] = useState(false)

  const handleCardClick = (data) => {
    onSelect(data._id)
  }

  const handleLike = (movieId) => {
    const updated = {
      movieLikes: user.movieLikes.includes(movieId)
        ? user.movieLikes.filter((movie) => movie !== movieId)
        : [...user.movieLikes, movieId]
    }
    axios
      .put(`${api.user}/${user.id}/like`, updated)
      .then((res) => {
        setLike((prev) => !prev)
        updateLikes(updated.movieLikes)
      })
      .then(() => {
        if (onChange) {
          onChange(updated.movieLikes)
        }
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    setLike(user?.movieLikes?.includes(data._id))
  }, [user])

  return (
    <Container backImg={data.imageUrl}>
      <div className="card__like">
        <LikeButton active={liked} onChange={handleLike} movieId={data._id} />
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
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleCardClick(data)}
          >
            Buy Tickets
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default MovieCard
