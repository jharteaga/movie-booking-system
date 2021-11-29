import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { MovieReducer } from './MovieReducer'
import { api } from '../../config'

const initialState = {
  seatsSelected: [],
  movieSelected: {},
  seats: []
}

export const MovieContext = createContext(initialState)

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState)

  useEffect(() => {
    refreshState()
  }, [])

  const updateMovieSelected = (movie) => {
    dispatch({ type: 'SELECT_MOVIE', payload: { movie } })
  }

  const updateMovieDateTime = (movieDate, movieTime, seats) => {
    localStorage.setItem('showDate', movieDate)
    localStorage.setItem('showTime', movieTime)
    localStorage.setItem('seats', JSON.stringify(seats))
    localStorage.removeItem('seatsSelected')

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

  const refreshState = () => {
    const movieId = localStorage.getItem('movieIdSelected')
    const movieDate = localStorage.getItem('showDate')
    const movieTime = localStorage.getItem('showTime')
    const allSeats = localStorage.getItem('seats')
      ? JSON.parse(localStorage.getItem('seats'))
      : []
    const seatsSelected = localStorage.getItem('seatsSelected')
      ? JSON.parse(localStorage.getItem('seatsSelected'))
      : []

    if (movieId) {
      axios
        .get(`${api.movie}/${movieId}`)
        .then(({ data: res }) => {
          dispatch({
            type: 'REFRESH',
            payload: {
              movie: res.data,
              selection: { movieDate, movieTime, allSeats, seatsSelected }
            }
          })
        })
        .catch((err) => console.log(err))
    }
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
