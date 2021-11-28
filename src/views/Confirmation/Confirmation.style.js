import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 90%;
  width: 100%;

  .confirmation-message {
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid green;
    border-radius: 10px;
    padding: 0.5rem;
    margin-bottom: 2rem;

    p {
      margin-bottom: 0;
    }

    .check {
      margin-right: 1rem;
      border: 1px solid #fff;
      padding: 5px 9px;
      border-radius: 50%;
    }
  }

  .ticket {
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 1px 1px 8px 1px #aaa;
    border-radius: 8px;

    &__image {
      width: 320px;
      height: 300px;
      background-image: url(${(props) => props.image});
      background-position: top;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    &__title {
      font-weight: 600;
      font-size: 1.2rem;
    }

    &__information {
      padding: 1rem;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    &__datetime {
      display: flex;
      justify-content: space-between;

      .group {
        p {
          margin-bottom: 0;

          &:nth-of-type(1) {
            font-weight: 600;
          }
        }
      }
    }

    &__seats {
      margin-top: 1rem;

      p {
        margin-bottom: 0;

        &:nth-of-type(1) {
          font-weight: 600;
        }
      }
    }
  }

  .btn {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    border: none;
    padding: 1rem;
  }
`
