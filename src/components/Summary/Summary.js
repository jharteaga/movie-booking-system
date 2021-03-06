import React, { useContext } from 'react'
import { MovieContext } from '../../context/movie/MovieContext'
import { Container } from './Summary.style'

const Summary = () => {
  const { movie, seatsSelected } = useContext(MovieContext)

  return (
    <Container>
      <h2>Purchase Summary</h2>
      <div className="summary">
        <div className="summary__info">
          <p className="title">{movie.title}</p>
          <p>
            Date: <span>{movie.showDate}</span>
          </p>
          <p>
            Time: <span>{movie.showTime}</span>
          </p>
          <p>
            Seats:{' '}
            <span>
              {seatsSelected.reduce((accum, current, index) => {
                return index === 0 ? `${current}` : `${accum}, ${current}`
              }, '')}
            </span>
          </p>
        </div>
        <img src={movie.imageUrl} alt={`${movie.title} image`} />
      </div>
    </Container>
  )
}

export default Summary
