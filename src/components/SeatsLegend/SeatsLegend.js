import React from 'react'
import { theme } from '../../theme'
import Seat from '../Seat/Seat'
import { Container } from './SeatsLegend.style'

const SeatsLegend = () => {
  return (
    <Container>
      <div className="seats__legend">
        <Seat bgColor={theme.seatAvailable} />
        <span>Available</span>
      </div>
      <div className="seats__legend">
        <Seat bgColor={theme.seatBooked} />
        <span>Booked</span>
      </div>
      <div className="seats__legend">
        <Seat bgColor={theme.seatSelected} />
        <span>Selected</span>
      </div>
    </Container>
  )
}

export default SeatsLegend
