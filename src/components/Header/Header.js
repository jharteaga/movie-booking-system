import React, { useContext, useState, useEffect } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import MobileMenu from '../MobileMenu/MobileMenu'
import { FaBars } from 'react-icons/fa'
import { UserContext } from '../../context/user/UserContext'
import { NavLink, useHistory } from 'react-router-dom'
import { Container } from './Header.style'

const Header = () => {
  const history = useHistory()
  const { user } = useContext(UserContext)
  const [show, setShow] = useState(false)
  const [matches, setMatches] = useState(false)

  const handleClose = () => setShow(false)
  const handleMenu = () => setShow((prev) => !prev)

  const handleGoMyPurchases = () => {
    history.push('/my-purchases')
  }

  const handleGoMyFavorites = () => {
    history.push('/my-favorites')
  }

  useEffect(() => {
    const mediaWatcher = window.matchMedia('(min-width: 500px)')
    setMatches(mediaWatcher.matches)

    //Function to be called when a screen size change is detected
    function updateMatches(e) {
      setMatches(e.matches)
    }

    mediaWatcher.addEventListener('change', updateMatches)

    //Reseting the menu in its initial state
    setShow(false)

    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateMatches)
    }
  }, [matches])

  return (
    <Container>
      <div className="mobile-menu" onClick={handleMenu}>
        <FaBars size={25} />
      </div>
      <h1 className="logo">
        <NavLink to="/">VanCinema</NavLink>
      </h1>
      <div className="user-profile">
        <p className="user-profile">Hello!</p>
        <NavDropdown title={user.firstName} id="nav-dropdown">
          <NavDropdown.Item onClick={handleGoMyPurchases}>
            My Purchases
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleGoMyFavorites}>
            My Favorites
          </NavDropdown.Item>
        </NavDropdown>
      </div>
      {!matches && (
        <div className="mobile-nav-container">
          <MobileMenu
            show={show}
            handleClose={handleClose}
            userName={user.firstName}
          />
        </div>
      )}
    </Container>
  )
}

export default Header
