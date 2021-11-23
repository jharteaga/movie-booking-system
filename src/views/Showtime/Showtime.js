import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import DateButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import Cinema from '../../components/Cinema/Cinema'
import { getDates, times } from '../../utils/datetime'
import { MovieContext } from '../../context/movie/MovieContext'
import { Container } from './Showtime.style'
import { api, initSeats } from '../../config'

const Showtime = () => {
  const { updateMovieDateTime, movie, seatsSelected } = useContext(MovieContext)
  const [dateSelected, setDateSelected] = useState()
  const [timeSelected, setTimeSelected] = useState()

  const handleChangeDate = (value) => {
    setDateSelected(value)
  }

  const handleChangeTime = (value) => {
    setTimeSelected(value)
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
        })
        .catch((err) => console.log(err))
    }
  }, [timeSelected, dateSelected])

  return (
    <Container>
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
              <img src={movie.imageUrl} alt="" />
            </div>
            <h2>Your tickets</h2>
            <div className="tickets">
              <div className="desktop-info">
                <p>
                  <span>Quantity:</span> {seatsSelected.length}
                </p>
                <p>
                  <span>Total:</span> ${(seatsSelected.length * 7.5).toFixed(2)}
                </p>
              </div>
              <button className="bg-danger">Purchase</button>
            </div>
          </div>
          <div className="cinema">
            <Cinema />
          </div>
          <div className="mobile-order-container">
            <img src={movie.imageUrl} alt="" />
            <div className="order-info">
              <p>
                <span>Quantity:</span> {seatsSelected.length}
              </p>
              <p>
                <span>Total:</span> ${(seatsSelected.length * 7.5).toFixed(2)}
              </p>
            </div>
            <div className="purchase-action">
              <button className="bg-danger">Purchase</button>
            </div>
          </div>
        </>
      )}
    </Container>
  )
}

export default Showtime
