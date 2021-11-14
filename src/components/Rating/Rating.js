import React, { useState, useEffect } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { Container } from './Rating.style'

const Rating = ({ review = 0 }) => {
  const [stars, setStars] = useState([])

  const getStars = (review) => {
    if (review > 0 && review <= 5)
      setStars([...Array(review).fill(true), ...Array(5 - review).fill(false)])
    else setStars(Array(5).fill(false))
  }

  useEffect(() => {
    getStars(review)
  }, [review])

  return (
    <Container>
      {stars.map((isFill, index) =>
        isFill ? (
          <FaStar key={index} size={16} color={'yellow'} />
        ) : (
          <FaRegStar key={index} size={16} />
        )
      )}
    </Container>
  )
}

export default Rating
