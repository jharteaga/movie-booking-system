import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import DateButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import Cinema from '../../components/Cinema/Cinema'
import { MovieContext } from '../../context/movie/MovieContext'
import { Container } from './Showtime.style'
import { api } from '../../config'

const dates = [
  {
    value1: '17',
    value2: 'Nov',
    value3: '2021-11-17'
  },
  {
    value1: '18',
    value2: 'Nov',
    value3: '2021-11-18'
  },
  {
    value1: '19',
    value2: 'Nov',
    value3: '2021-11-19'
  },
  {
    value1: '20',
    value2: 'Nov',
    value3: '2021-11-20'
  },
  {
    value1: '21',
    value2: 'Nov',
    value3: '2021-11-21'
  }
]

const times = [
  {
    value1: '4:30',
    value2: 'PM'
  },
  {
    value1: '7:00',
    value2: 'PM'
  },
  {
    value1: '9:00',
    value2: 'PM'
  }
]

const Showtime = () => {
  const { updateMovieDateTime, movie, seatsSelected } = useContext(MovieContext)
  const [dateSelected, setDateSelected] = useState()
  const [timeSelected, setTimeSelected] = useState()
  const [seats, setSeats] = useState([])

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
          setSeats(data.allSeats)
          updateMovieDateTime(showDate, showTime, data.allSeats)
        })
        .catch((err) => console.log(err))
    }
  }, [timeSelected, dateSelected])

  return (
    <Container>
      <div className="options-container date-picker">
        <p>When do you want to come?</p>
        <DateButtonGroup data={dates} onChange={handleChangeDate} />
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
                  <span>Total:</span> $0.00
                </p>
              </div>
              <button className="bg-danger">Purchase</button>
            </div>
          </div>
          <div className="cinema">
            <Cinema />
          </div>
          <div className="mobile-order-container">
            <div className="order-info">
              <p>
                <span>Quantity:</span> {seatsSelected.length}
              </p>
              <p>
                <span>Total:</span> $0.00
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
