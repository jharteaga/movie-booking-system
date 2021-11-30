import './style.scss'

import React from 'react'
import ReactDom from 'react-dom'
import { MovieProvider } from './context/movie/MovieContext'
import { UserProvider } from './context/user/UserContext'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme'
import App from './App'

ReactDom.render(
  <UserProvider>
    <MovieProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </MovieProvider>
  </UserProvider>,
  document.getElementById('react-container')
)
