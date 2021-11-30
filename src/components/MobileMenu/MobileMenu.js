import React from 'react'
import { NavLink } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Container } from './MobileMenu.style'
import { theme } from '../../theme'

const MobileMenu = ({ handleClose, show, userName }) => {
  return (
    <Container show={show}>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{
          width: '65%',
          zIndex: '10000',
          borderTopRightRadius: '8px',
          backgroundColor: '#eee',
          paddingLeft: '0.5rem'
        }}
        backdrop={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome, {userName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavLink
            to={'/my-purchases'}
            style={{
              textDecoration: 'none',
              color: `${theme.primary}`,
              fontWeight: '500'
            }}
            onClick={handleClose}
          >
            <p>My Purchases</p>
          </NavLink>
          <NavLink
            to={'/my-favorites'}
            style={{
              textDecoration: 'none',
              color: `${theme.primary}`,
              fontWeight: '500'
            }}
            onClick={handleClose}
          >
            <p>My Favorites</p>
          </NavLink>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  )
}

export default MobileMenu
