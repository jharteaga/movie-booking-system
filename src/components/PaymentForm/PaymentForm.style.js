import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  max-width: 500px;
  width: 100%;
  box-shadow: -1px 2px 10px 2px rgba(138, 135, 135, 0.81);
  /* padding: 8em 2em 2em 2em; */
  padding: 2em 2em 2em 2em;
  margin-bottom: 12em;
  border-radius: 15px;

  h2 {
    margin-bottom: 2rem;
    font-weight: 600;
  }

  #form {
    &__row {
      margin: 0.5rem auto;
    }

    &__submit {
    }

    .cvv {
      margin-top: 1rem;

      @media (min-width: 768px) {
        margin-top: 0;
      }
    }
  }

  button {
    width: 100%;
    height: 2.6em;
    font-size: 1.2rem;
    border-radius: 5px;
  }
`
