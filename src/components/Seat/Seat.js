import React from 'react'
import { Container } from './Seat.style'

const Seat = ({ bgColor, identifier, number, onSelect }) => {
  const handleSeatSelection = () => {
    if (onSelect) onSelect(identifier, number)
  }

  return (
    <Container bgColor={bgColor} onClick={handleSeatSelection}>
      <div className="seat__cushion"></div>
      <div className="seat__back"></div>
    </Container>
  )
}

export default Seat
