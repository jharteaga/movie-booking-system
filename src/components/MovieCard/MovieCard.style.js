import styled from 'styled-components'

export const Container = styled.div`
  /* background-image: url('https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg'); */
  background-image: url(${(props) => props.backImg});
  max-width: 320px;
  width: 100%;
  height: 450px;
  object-fit: contain;
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card__like {
    align-self: flex-end;
    padding-right: 10px;
    padding-top: 10px;
  }

  .card {
    background-color: rgba(0, 0, 0, 0.85);
    font-size: 0.75rem;
    padding: 0.6rem 0.8rem 0.8rem 0.8rem;
    border-radius: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    &__title {
      font-size: 1rem;
      margin-bottom: 0;
    }

    &__meta,
    &__overview {
      color: #c5c5c5;
    }

    &__overview {
      display: -webkit-box;
      max-width: 300px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
