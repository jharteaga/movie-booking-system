import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
  max-width: 100%;
  width: 100%;

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
      display: block;
    }
  }
`
