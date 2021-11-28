import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2.5rem;

  h2 {
    margin-bottom: 1.5rem;
    font-weight: 600;
    border: 2px solid #fff;
    padding: 0.5rem;
    text-align: center;
    border-radius: 8px;
    font-size: 1.3rem;
  }

  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 0 0.5rem;

    .title {
      font-size: 1.1rem;
    }

    p {
      font-weight: 600;

      span {
        font-weight: 400;
      }
    }

    img {
      width: 150px;
      max-width: 100%;
      object-fit: cover;
      height: 200px;
      border-radius: 8px;
    }
  }
`
