import React, { useState } from 'react'
import { Container } from './LikeButton.style'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const LikeButton = ({ active = false, movieId, onChange }) => {
  const handleChange = () => {
    onChange(movieId)
  }

  return (
    <Container>
      {active ? (
        <FaHeart color={'red'} onClick={handleChange} />
      ) : (
        <FaRegHeart color={'red'} onClick={handleChange} />
      )}
    </Container>
  )
}

export default LikeButton
