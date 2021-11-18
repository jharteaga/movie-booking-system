import React from 'react'
import { Container } from './Seat.style'

const Seat = ({ bgColor }) => {
  return (
    <Container bgColor={bgColor}>
      <div className="seat__cushion"></div>
      <div className="seat__back"></div>
    </Container>
  )
}

export default Seat
