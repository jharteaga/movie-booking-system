import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'
import { Container } from './Header.style'

const Header = () => {
  return (
    <Container>
      <h1 className="logo">
        <NavLink to="/">VanCinema</NavLink>
      </h1>
      <div className="user-profile">
        <p className="user-profile">Hello!</p>
        <NavDropdown title="Santiago" id="nav-dropdown">
          <NavDropdown.Item>My Purchases</NavDropdown.Item>
          <NavDropdown.Item>My Favorites</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item id="sign-out">Sign Out</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Container>
  )
}

export default Header
