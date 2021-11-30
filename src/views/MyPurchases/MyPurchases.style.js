import styled from 'styled-components'

export const Container = styled.div`
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;

  .title {
    margin-bottom: 2rem;
  }

  .accordion-body {
    background-color: #eee;

    span {
      font-weight: 600;
    }
  }

  .purchase-detail {
    color: #111;
  }

  @media (min-width: 900px) {
    max-width: 900px;
    width: 100%;
  }
`
