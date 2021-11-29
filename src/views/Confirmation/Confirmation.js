import React, { useContext, useEffect } from 'react'
import { FaCheck, FaHome } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { MovieContext } from '../../context/movie/MovieContext'
import { Container } from './Confirmation.style'

const Confirmation = () => {
  const history = useHistory()
  const { movie, seatsSelected } = useContext(MovieContext)

  const handleGoHome = () => {
    history.push('/')
  }

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <Container image={movie.imageUrl}>
      <div className="confirmation-message">
        <div className="check">
          <FaCheck size={16} color={'green'} />
        </div>
        <p>Your purchase was successful</p>
      </div>
      <div className="ticket">
        {/* <img src={movie.imageUrl} alt="" /> */}
        <div className="ticket__image"></div>
        <div className="ticket__information">
          <p className="ticket__title">{movie.title}</p>
          <div className="ticket__datetime">
            <div className="group">
              <p>Date</p>
              <p>{movie.showDate}</p>
            </div>
            <div className="group">
              <p>Time</p>
              <p>{movie.showTime}</p>
            </div>
            <div className="group">
              <p>Price</p>
              <p>{seatsSelected.length * 7.5}</p>
            </div>
          </div>
          <div className="ticket__seats">
            <p>Seats</p>
            <p>
              {seatsSelected.reduce((accum, current, index) => {
                return index === 0 ? `${current}` : `${accum}, ${current}`
              }, '')}
            </p>
          </div>
        </div>
      </div>

      <button className="btn btn-danger" onClick={handleGoHome}>
        <FaHome />
        Go back Home
      </button>
    </Container>
  )
}

export default Confirmation
