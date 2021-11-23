import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './Header.style'

const Header = () => {
  return (
    <Container>
      <h1 className="logo">
        <NavLink to="/">VanCinema</NavLink>
      </h1>
      <p className="user-profile">Hello! Santiago</p>
    </Container>
  )
}

export default Header
