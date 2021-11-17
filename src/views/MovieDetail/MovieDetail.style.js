import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: start;

  .detail__header {
    display: grid;
    grid-template-columns: 70px 1fr;
    column-gap: 1rem;

    &__back {
      font-size: 1.8rem;
      margin-left: 1rem;
      padding: 0;
      align-self: center;
      justify-self: center;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 0 8px 3px 6px;
      border-radius: 10px;
      cursor: pointer;
      border: transparent;
    }

    & h2 {
      justify-self: start;
      align-self: center;
      font-size: 1.4rem;
      margin-bottom: 0;
      font-weight: 600;
    }
  }

  .detail__image {
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
    margin-top: 1.5rem;
    text-align: center;

    & img {
      object-fit: contain;
      width: 100%;
      max-width: 90%;
      height: 500px;
      border-radius: 10px;
    }
  }

  .detail__info {
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 2rem;

    p {
      font-size: 0.9rem;
    }

    .releaseDate span,
    .genres span,
    .overview p:first-child,
    .rating p {
      font-size: 1rem;
      font-weight: 500;
    }

    .overview {
      & p:first-child {
        margin-bottom: 0;
      }
    }

    .rating p {
      margin-bottom: 0.3rem;
    }
  }

  .trailer {
    width: 100%;
    max-width: 90%;
    margin: 0 auto;

    p {
      font-size: 1rem;
      font-weight: 500;
    }
  }

  .cta-desk-tickets {
    display: none;
  }

  .cta-mob-tickets {
    position: fixed;
    right: 2rem;
    bottom: 3rem;

    button {
      width: 65px;
      height: 65px;
      color: #ffffff;
      font-size: 1.4rem;
      font-weight: 500;
      border-radius: 50%;
      border: none;
      padding-top: -10px;
    }
  }

  @media (min-width: 700px) {
    max-width: 1000px;
    width: 95%;
    margin: 0 auto;
    margin-top: 1.5rem;
    margin-bottom: 5rem;
    display: grid;
    grid-template-areas:
      'header header cta'
      'poster info info'
      'trailer trailer trailer';

    button {
      border-color: transparent;
      border-width: 0;
    }

    .detail__header {
      grid-area: header;
      display: flex;
      justify-content: start;
      max-width: 95%;
      width: 100%;

      &__back {
        left: 100px;
      }

      & h2 {
        font-size: 1.7rem;
      }
    }

    .detail__image {
      grid-area: poster;
    }

    .detail__info {
      grid-area: info;
      align-self: center;

      p {
        font-size: 1rem;
      }
    }

    .trailer {
      grid-area: trailer;
      padding-left: 1rem;
      font-size: 1rem;
      margin: 0;
    }

    .cta-desk-tickets {
      grid-area: cta;
      display: block;
      border: none;
    }

    .cta-mob-tickets {
      display: none;
    }
  }
`
