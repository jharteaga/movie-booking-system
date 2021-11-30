const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const times = [
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

export const formatDate = (value, type) => {
  const date = new Date(value)
  switch (type) {
    case 'datetime':
      return `${
        months[date.getMonth()]
      }, ${date.getDate()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`

    case 'date':
      return `${
        months[date.getMonth()]
      }, ${date.getDate()}, ${date.getFullYear()}`

    case 'time':
      return `${date.getHours()}:${date.getMinutes()}`
  }
}

export const getDates = () => {
  const dates = []
  const dateObjects = []

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      const currentDate = new Date()
      dateObjects.push(currentDate)
      dates.push({
        value1: currentDate.getDate().toString(),
        value2: months[currentDate.getMonth()],
        value3: `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`
      })
    } else {
      const newDate = new Date(
        dateObjects[i - 1].getTime() + 24 * 60 * 60 * 1000
      )
      dateObjects.push(newDate)
      dates.push({
        value1: newDate.getDate().toString(),
        value2: months[newDate.getMonth()],
        value3: `${newDate.getFullYear()}-${
          newDate.getMonth() + 1
        }-${newDate.getDate()}`
      })
    }
  }

  return dates
}
