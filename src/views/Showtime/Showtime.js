import React, { useEffect, useState } from 'react'
import DateButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import Cinema from '../../components/Cinema/Cinema'
import { Container } from './Showtime.style'

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
    value1: '4:00',
    value2: 'PM'
  },
  {
    value1: '6:30',
    value2: 'PM'
  },
  {
    value1: '9:00',
    value2: 'PM'
  }
]

const Showtime = () => {
  const [dateSelected, setDateSelected] = useState()
  const [timeSelected, setTimeSelected] = useState()

  const handleChangeDate = (value) => {
    setDateSelected(value)
  }

  const handleChangeTime = (value) => {
    setTimeSelected(value)
  }

  return (
    <Container>
      <div className="options-container">
        <p>When do you want to come?</p>
        <DateButtonGroup data={dates} onChange={handleChangeDate} />
      </div>
      {dateSelected && (
        <div className="options-container">
          <p>At what time?</p>
          <DateButtonGroup
            data={times}
            onChange={handleChangeTime}
            borderColor="dodgerblue"
          />
        </div>
      )}
      {timeSelected && (
        <div className="cinema">
          <Cinema />
        </div>
      )}
    </Container>
  )
}

export default Showtime
