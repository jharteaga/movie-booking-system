import React from 'react'
import { theme } from '../../theme'
import Seat from '../Seat/Seat'
import { Container } from './SeatsRow.style'

// const row = [0, 0, 0, 0, 0, 0, 0, 0]

const SeatsRow = ({ row, identifier = 'A' }) => {
  const state = {
    AVAILABLE: 0,
    BOOKED: 1,
    SELECTED: -1
  }

  return (
    <Container>
      <small>{identifier}</small>
      {row.map((seat, index) => {
        switch (seat) {
          case state.AVAILABLE:
            return (
              <span className="seatRow-container" key={index}>
                <Seat bgColor={theme.seatAvailable} />
              </span>
            )

          case state.BOOKED:
            return (
              <span className="seatRow-container" key={index}>
                <Seat bgColor={theme.seatBooked} />
              </span>
            )

          case state.SELECTED:
            return (
              <span className="seatRow-container" key={index}>
                <Seat bgColor={theme.seatSelected} />
              </span>
            )
        }
      })}
    </Container>
  )
}

export default SeatsRow
