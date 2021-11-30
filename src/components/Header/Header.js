import React, { useContext } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { UserContext } from '../../context/user/UserContext'
import { NavLink, useHistory } from 'react-router-dom'
import { Container } from './Header.style'

const Header = () => {
  const history = useHistory()
  const { user } = useContext(UserContext)

  const handleGoMyPurchases = () => {
    history.push('/my-purchases')
  }

  return (
    <Container>
      <h1 className="logo">
        <NavLink to="/">VanCinema</NavLink>
      </h1>
      <div className="user-profile">
        <p className="user-profile">Hello!</p>
        <NavDropdown title={user.firstName} id="nav-dropdown">
          <NavDropdown.Item onClick={handleGoMyPurchases}>
            My Purchases
          </NavDropdown.Item>
          <NavDropdown.Item>My Favorites</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item id="sign-out">Sign Out</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Container>
  )
}

export default Header
