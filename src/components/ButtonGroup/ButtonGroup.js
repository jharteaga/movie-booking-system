import React, { useState } from 'react'
import { Container } from './ButtonGroup.style'

const DateButtonGroup = ({ data, onChange, borderColor }) => {
  const [dateSelected, setDateSelected] = useState()

  const handleDateChange = (item) => {
    if (item.value1 !== dateSelected?.value1) {
      setDateSelected(item)
      onChange(item)
    }
  }

  return (
    <Container borderColor={borderColor}>
      <div className="showdates">
        {data.map((item) => (
          <div
            key={item.value1}
            className={
              item.value1 === dateSelected?.value1
                ? 'showdate active'
                : 'showdate'
            }
            onClick={() => handleDateChange(item)}
          >
            <span>{item.value1}</span>
            <span>{item.value2}</span>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default DateButtonGroup
