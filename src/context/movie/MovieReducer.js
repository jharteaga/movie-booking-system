export const MovieReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      return {
        ...state,
        movieSelected: {
          ...state.movieSelected,
          id: action.payload?.movie?._id,
          title: action.payload?.movie?.title
        }
      }

    case 'UPDATE_DATETIME':
      return {
        ...state,
        movieSelected: {
          ...state.movieSelected,
          showDate: action.payload?.movieDate,
          showTime: action.payload?.movieTime
        },
        seats: action.payload?.seats
      }

    case 'SELECT_SEAT':
      return {
        ...state,
        seatsSelected: state.seatsSelected.includes(action.payload.seat)
          ? state.seatsSelected.filter((item) => item !== action.payload.seat)
          : [...state.seatsSelected, action.payload.seat]
      }

    case 'UPDATE_SEATS':
      return {
        ...state,
        seats: state.seats.map((line) => {
          return {
            ...line,
            row: line.row.map((item, index) => {
              if (
                line.identifier === action.payload.identifier &&
                index + 1 === action.payload.number &&
                item !== 1
              ) {
                return item === 0 ? -1 : 0
              } else {
                return item
              }
            })
          }
        })
      }

    default:
      return state
  }
}
