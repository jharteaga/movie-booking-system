import React, { useContext } from 'react'
import Seat from '../Seat/Seat'
import { MovieContext } from '../../context/movie/MovieContext'
import { theme } from '../../theme'
import { Container } from './SeatsRow.style'

const seatStatus = {
  AVAILABLE: 0,
  BOOKED: 1,
  SELECTED: -1
}

const SeatsRow = ({ row, identifier = 'A' }) => {
  const { selectSeat, updateSeats } = useContext(MovieContext)

  const handleSelectSeat = (identifier, number) => {
    selectSeat(`${identifier}${number}`)
    updateSeats(identifier, number)
  }

  return (
    <>
      {row && (
        <Container>
          <small>{identifier}</small>
          {row.map((seat, index) => {
            switch (seat) {
              case seatStatus.AVAILABLE:
                return (
                  <span className="seatRow-container" key={index}>
                    <Seat
                      bgColor={theme.seatAvailable}
                      identifier={identifier}
                      number={index + 1}
                      onSelect={handleSelectSeat}
                    />
                  </span>
                )

              case seatStatus.BOOKED:
                return (
                  <span className="seatRow-container" key={index}>
                    <Seat
                      bgColor={theme.seatBooked}
                      identifier={identifier}
                      number={index + 1}
                    />
                  </span>
                )

              case seatStatus.SELECTED:
                return (
                  <span className="seatRow-container" key={index}>
                    <Seat
                      bgColor={theme.seatSelected}
                      identifier={identifier}
                      number={index + 1}
                      onSelect={handleSelectSeat}
                    />
                  </span>
                )
            }
          })}
        </Container>
      )}
    </>
  )
}

export default SeatsRow
