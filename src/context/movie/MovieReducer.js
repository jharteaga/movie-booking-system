export const MovieReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      return {
        ...state,
        movieSelected: {
          ...state.movieSelected,
          id: action.payload?.movie?._id,
          title: action.payload?.movie?.title,
          imageUrl: action.payload?.movie?.imageUrl
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
        seats: action.payload?.seats ? action.payload?.seats : [],
        seatsSelected: []
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

    case 'REFRESH':
      return {
        ...state,
        movieSelected: {
          ...state.movieSelected,
          id: action.payload?.movie?._id,
          title: action.payload?.movie?.title,
          imageUrl: action.payload?.movie?.imageUrl,
          showDate: action.payload?.selection?.movieDate,
          showTime: action.payload?.selection?.movieTime
        },
        seats: action.payload?.selection?.allSeats,
        seatsSelected: action.payload?.selection?.seatsSelected
      }

    default:
      return state
  }
}
