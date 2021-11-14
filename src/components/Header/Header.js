import React from 'react'

import { Container } from './Header.style'

const Header = () => {
  return (
    <Container>
      <h1 className="logo">VanCinema</h1>
      <p className="user-profile">Hello! Santiago</p>
    </Container>
  )
}

export default Header
