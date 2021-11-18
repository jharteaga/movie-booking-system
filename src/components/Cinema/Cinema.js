import React from 'react'
import Seat from '../Seat/Seat'
import SeatsLegend from '../SeatsLegend/SeatsLegend'
import SeatsRow from '../SeatsRow/SeatsRow'
import { Container } from './Cinema.style'

const seats = [
  { identifier: 'A', row: [0, 0, 0, 0, 0, 0, 0, 0] },
  { identifier: 'B', row: [0, 0, 0, 0, 0, 0, 0, 0] },
  { identifier: 'C', row: [0, 0, 0, 0, 0, 0, 0, 0] },
  { identifier: 'D', row: [0, 0, 0, 0, 0, 0, 0, 0] },
  { identifier: 'E', row: [0, 0, 0, 0, 0, 0, 0, 0] },
  { identifier: 'F', row: [0, 0, 0, 0, 0, 0, 0, 0] }
]

const Cinema = () => {
  return (
    <Container>
      <SeatsLegend />
      <div className="screen">Screen</div>
      <div className="seats__container">
        {seats.map(({ identifier, row }) => (
          <SeatsRow key={identifier} row={row} identifier={identifier} />
        ))}
      </div>
    </Container>
  )
}

export default Cinema
