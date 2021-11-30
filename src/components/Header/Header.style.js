import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1.5rem;
  max-width: 100%;
  width: 100%;
  position: relative;

  .mobile-menu {
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    flex-grow: 1;
    text-align: center;
  }

  h1,
  p {
    margin: 0;
  }

  .user-profile {
    display: none;
  }

  .mobile-nav-container {
    display: block;
  }

  @media (min-width: 500px) {
    justify-content: space-between;

    .mobile-nav-container {
      display: none;
    }

    h1 {
      flex-grow: 0;
      text-align: left;
    }

    .user-profile {
      margin-top: -4px;
      display: flex;
      align-items: center;
    }

    .mobile-menu {
      display: none;
    }

    .dropdown {
      #nav-dropdown {
        color: ${theme.secondary};
        font-weight: bold;
        padding-left: 0.5rem;
        font-size: 1.1rem;
        margin-top: -4px;
        font-family: 'Proxima Nova';
      }

      .dropdown-menu {
        font-size: 1.1rem;
        width: 250px;
      }

      #sign-out {
        color: red;
      }
    }
  }
`
