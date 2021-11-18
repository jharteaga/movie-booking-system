import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  gap: 0.5rem;

  small {
    font-weight: 500;
    margin-right: 1rem;
  }

  .seatRow-container {
    max-width: 35px;
    width: 100%;
  }

  span:nth-of-type(2) {
    margin-right: 1rem;
  }

  span:nth-last-child(2) {
    margin-left: 1rem;
  }
`
