import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
  max-width: 100%;
  width: 100%;

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  p {
    margin: 0;
  }

  .user-profile {
    display: none;
  }

  @media (min-width: 500px) {
    justify-content: space-between;

    .user-profile {
      margin-top: -4px;
      display: flex;
      align-items: center;
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
