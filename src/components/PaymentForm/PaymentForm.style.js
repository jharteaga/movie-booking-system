import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  max-width: 500px;
  width: 100%;
  box-shadow: -1px 2px 10px 2px rgba(138, 135, 135, 0.81);
  padding: 8em 2em 2em 2em;
  margin-bottom: 12em;
  border-radius: 15px;

  .form {
    &__row {
      margin: 0.5rem auto;
    }

    &__submit {
    }
  }

  button {
    width: 100%;
    height: 2.6em;
    font-size: 1.2rem;
    border-radius: 5px;
    /* background-color: rgb(50, 88, 212); */
  }
`
