import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  .detail__header {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
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

    p {
      font-size: 0.9rem;
    }

    .releaseDate span,
    .genres span,
    .overview p:first-child {
      font-size: 1rem;
      font-weight: 500;
    }

    .overview {
      & p:first-child {
        margin-bottom: 0;
      }
    }

    .trailer {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-size: 1rem;
        font-weight: 500;
        align-self: start;
      }
    }
  }
`
