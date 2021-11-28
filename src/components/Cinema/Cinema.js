import React, { useContext } from 'react'
import SeatsLegend from '../SeatsLegend/SeatsLegend'
import SeatsRow from '../SeatsRow/SeatsRow'
import { MovieContext } from '../../context/movie/MovieContext'
import { Container } from './Cinema.style'

const Cinema = () => {
  const { seats } = useContext(MovieContext)

  return (
    <Container>
      {seats && (
        <>
          <SeatsLegend />
          <div className="screen">Screen</div>
          <div className="seats__container">
            {seats.map(({ identifier, row }) => (
              <SeatsRow key={identifier} row={row} identifier={identifier} />
            ))}
          </div>
        </>
      )}
    </Container>
  )
}

export default Cinema
