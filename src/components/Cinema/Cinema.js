import React, { useContext, useEffect } from 'react'
import SeatsLegend from '../SeatsLegend/SeatsLegend'
import SeatsRow from '../SeatsRow/SeatsRow'
import { MovieContext } from '../../context/movie/MovieContext'
import { Container } from './Cinema.style'

// const seats = [
//   { identifier: 'A', row: [0, 0, 0, 0, 0, 0, 0, 0] },
//   { identifier: 'B', row: [0, 0, 0, 0, 0, 0, 0, 0] },
//   { identifier: 'C', row: [0, 0, 0, 0, 0, 0, 0, 0] },
//   { identifier: 'D', row: [0, 0, 0, 0, 0, 0, 0, 0] },
//   { identifier: 'E', row: [0, 0, 0, 0, 0, 0, 0, 0] },
//   { identifier: 'F', row: [0, 0, 0, 0, 0, 0, 0, 0] }
// ]

const Cinema = () => {
  const { seats } = useContext(MovieContext)

  useEffect(() => {}, [seats])

  return (
    <Container>
      {seats && (
        <>
          <SeatsLegend />
          <div className="screen">Screen</div>
          <div className="seats__container">
            {seats.map(({ identifier, row, _id }) => (
              <SeatsRow key={_id} row={row} identifier={identifier} />
            ))}
          </div>
        </>
      )}
    </Container>
  )
}

export default Cinema
