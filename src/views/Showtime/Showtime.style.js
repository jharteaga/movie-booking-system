import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;

  h1 {
    text-align: center;
  }

  .options-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .cinema {
    margin: 0 auto;
    max-width: 95%;
    width: 100%;
    margin-bottom: 4.5rem;
  }

  .order-container {
    display: none;
  }

  .mobile-order-container {
    background-color: #fff;
    max-width: 100%;
    width: 100%;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: fixed;
    bottom: 3rem;
    left: 0;
    right: 0;
    border-radius: 5px;

    img {
      width: 70px;
      height: 90px;
      border-radius: 8px;
    }

    p {
      margin-bottom: 0;
      font-size: 1.3rem;
      font-weight: 600;

      span {
        font-size: 0.9rem;
      }
    }

    button {
      border-width: 0;
      padding: 0.7rem;
      border-radius: 10px;
      color: #fff;
    }
  }

  @media (min-width: 1000px) {
    max-width: 1100px;
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-areas:
      'datePicker datePicker order'
      'timePicker timePicker order'
      'cinema cinema order';

    .mobile-order-container {
      display: none;
    }

    .date-picker {
      grid-area: datePicker;
    }

    .time-picker {
      grid-area: timePicker;
    }

    .cinema {
      grid-area: cinema;
    }

    .order-container {
      margin-top: 2rem;
      grid-area: order;
      display: block;
      background-color: #fff;
      max-width: 350px;
      width: 100%;
      color: #000;
      padding: 1rem;
      border-radius: 10px;
      height: 560px;

      img {
        max-width: 100%;
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 8px;
      }

      h2 {
        margin-top: 1rem;
        font-weight: 600;
      }

      .tickets {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          margin-bottom: 0;
          font-size: 1.3rem;
          font-weight: 600;

          span {
            font-size: 0.9rem;
          }
        }

        button {
          border-width: 0;
          padding: 1rem;
          border-radius: 10px;
          color: #fff;
        }
      }
    }
  }
`
