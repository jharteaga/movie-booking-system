import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import DateButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import Cinema from '../../components/Cinema/Cinema'
import { useHistory } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { getDates, times } from '../../utils/datetime'
import { MovieContext } from '../../context/movie/MovieContext'
import { Container } from './Showtime.style'
import { api, initSeats } from '../../config'

const Showtime = () => {
  const history = useHistory()
  const { updateMovieDateTime, movie, seatsSelected } = useContext(MovieContext)
  const [dateSelected, setDateSelected] = useState()
  const [timeSelected, setTimeSelected] = useState()
  const [seatsId, setSeatsId] = useState()

  const handleGoBack = () => {
    history.push('/movie-detail')
  }

  const handleChangeDate = (value) => {
    setDateSelected(value)
  }

  const handleChangeTime = (value) => {
    setTimeSelected(value)
  }

  const handlePurchase = () => {
    localStorage.setItem('seatsSelected', JSON.stringify(seatsSelected))
    localStorage.setItem('seatsId', seatsId)
    history.push('/payment')
  }

  useEffect(() => {
    if (dateSelected && timeSelected) {
      const showDate = `${dateSelected?.value3}`
      const showTime = `${timeSelected?.value1} ${timeSelected?.value2}`

      axios
        .get(
          `${api.movie}/${movie.id}/seats?showDate=${showDate}&showTime=${showTime}`
        )
        .then(({ data: { data } }) => {
          data?.allSeats
            ? updateMovieDateTime(showDate, showTime, data?.allSeats)
            : updateMovieDateTime(showDate, showTime, initSeats)

          setSeatsId(data?._id)
        })
        .catch((err) => console.log(err))
    }
  }, [timeSelected, dateSelected])

  return (
    <Container>
      <div className="detail__header__back" onClick={handleGoBack}>
        <FaAngleLeft /> <span>Go back</span>
      </div>
      <div className="options-container date-picker">
        <p>When do you want to come?</p>
        <DateButtonGroup data={getDates()} onChange={handleChangeDate} />
      </div>
      {dateSelected && (
        <div className="options-container time-picker">
          <p>At what time?</p>
          <DateButtonGroup
            data={times}
            onChange={handleChangeTime}
            borderColor="dodgerblue"
          />
        </div>
      )}
      {timeSelected && (
        <>
          <div className="order-container">
            <div className="poster">
              <img src={movie.imageUrl} alt={`${movie.title} poster`} />
            </div>
            <h2>Your tickets</h2>
            <div className="tickets">
              <div className="desktop-info">
                <p>
                  <span>Seats:</span>{' '}
                  {seatsSelected.reduce((accum, current, index) => {
                    return index === 0 ? `${current}` : `${accum}, ${current}`
                  }, 'None')}
                </p>
                <p>
                  <span>Quantity:</span> {seatsSelected && seatsSelected.length}
                </p>
                <p>
                  <span>Total:</span> $
                  {seatsSelected && (seatsSelected.length * 7.5).toFixed(2)}
                </p>
              </div>
              <button
                className="bg-danger"
                onClick={handlePurchase}
                disabled={seatsSelected.length === 0}
              >
                Purchase
              </button>
            </div>
          </div>
          <div className="cinema">
            <Cinema />
          </div>
          <div className="mobile-order-container">
            <img src={movie.imageUrl} alt="" />
            <div className="order-info">
              <p>
                <span>Seats:</span>{' '}
                {seatsSelected ??
                  seatsSelected.reduce((accum, current, index) => {
                    return index === 0 ? `${current}` : `${accum}, ${current}`
                  }, 'None')}
              </p>
              <p>
                <span>Quantity:</span> {seatsSelected.length}
              </p>
              <p>
                <span>Total:</span> ${(seatsSelected.length * 7.5).toFixed(2)}
              </p>
            </div>
            <div className="purchase-action">
              <button
                className="bg-danger"
                onClick={handlePurchase}
                disabled={seatsSelected.length === 0}
              >
                Purchase
              </button>
            </div>
          </div>
        </>
      )}
    </Container>
  )
}

export default Showtime
