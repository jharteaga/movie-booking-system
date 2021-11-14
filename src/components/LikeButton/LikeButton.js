import React, { useState } from 'react'
import { Container } from './LikeButton.style'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const LikeButton = () => {
  const [status, setStatus] = useState(false)

  const handleChange = () => {
    setStatus((prev) => !prev)
  }

  return (
    <Container>
      {status ? (
        <FaHeart color={'red'} onClick={handleChange} />
      ) : (
        <FaRegHeart color={'red'} onClick={handleChange} />
      )}
    </Container>
  )
}

export default LikeButton
