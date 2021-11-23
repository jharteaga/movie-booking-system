import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  /* position: relative; */

  .detail__header__back {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    width: 105px;
    font-size: 1.8rem;
    margin-left: 1rem;
    padding: 0;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 4px 10px 3px 6px;
    border-radius: 10px;
    cursor: pointer;
    border: transparent;

    & span {
      font-size: 0.9rem;
    }
  }

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
    margin-bottom: 5rem;
  }

  .order-container {
    display: none;
  }

  .mobile-order-container {
    background-color: #eee;
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
      width: 75px;
      height: 90px;
      border-radius: 8px;
    }

    p {
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 600;

      &:nth-of-type(1) {
        font-size: 0.9rem;
        /* color: dodgerblue; */
      }

      span {
        font-size: 0.9rem;
        font-weight: 400;
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

    .detail__header__back {
      position: absolute;
      left: 10rem;
    }

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
      margin-bottom: 1rem;
    }

    .order-container {
      margin-top: 2rem;
      grid-area: order;
      display: block;
      background-color: #eee;
      max-width: 350px;
      width: 100%;
      color: #000;
      padding: 1rem 1.2rem;
      border-radius: 10px;
      height: 610px;
      /* height: 100%; */

      img {
        max-width: 100%;
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 8px;
      }

      h2 {
        margin: 1rem 0;
        font-weight: 600;
      }

      .tickets {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          margin-bottom: 0;
          font-size: 1.2rem;
          font-weight: 600;

          &:nth-of-type(1) {
            font-size: 0.9rem;
            /* color: dodgerblue; */
          }

          span {
            font-size: 0.9rem;
            color: #000;
            font-weight: 400;
          }
        }

        button {
          align-self: flex-end;
          border-width: 0;
          padding: 1rem;
          border-radius: 10px;
          color: #fff;
        }
      }
    }
  }
`
