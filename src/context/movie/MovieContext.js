import React, { createContext, useReducer } from 'react'
import { MovieReducer } from './MovieReducer'

const initialState = {
  seatsSelected: [],
  movieSelected: {},
  seats: []
}

export const MovieContext = createContext(initialState)

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState)

  const updateMovieSelected = (movie) => {
    dispatch({ type: 'SELECT_MOVIE', payload: { movie } })
  }

  const updateMovieDateTime = (movieDate, movieTime, seats) => {
    dispatch({
      type: 'UPDATE_DATETIME',
      payload: { movieDate, movieTime, seats }
    })
  }

  const selectSeat = (seat) => {
    dispatch({ type: 'SELECT_SEAT', payload: { seat } })
  }

  const updateSeats = (identifier, number) => {
    dispatch({ type: 'UPDATE_SEATS', payload: { identifier, number } })
  }

  return (
    <MovieContext.Provider
      value={{
        seatsSelected: state.seatsSelected,
        movie: state.movieSelected,
        seats: state.seats,
        updateMovieDateTime,
        updateMovieSelected,
        selectSeat,
        updateSeats
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
