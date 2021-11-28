import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  max-width: 90%;
  width: 100%;
  margin-top: 3rem;

  @media (min-width: 900px) {
    max-width: 1500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    column-gap: 0.5rem;
  }
`
