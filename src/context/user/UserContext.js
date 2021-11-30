import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { UserReducer } from './UserReducer'
import { api } from '../../config'

const initialState = {
  user: {}
}

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    axios
      .get(`${api.user}/6190699eba679222a49e5916`)
      .then(({ data: { data } }) => {
        dispatch({ type: 'UPDATE_USER', payload: data })
      })
      .catch((err) => console.log(err))
  }

  return (
    <UserContext.Provider value={{ user: state.user }}>
      {children}
    </UserContext.Provider>
  )
}
