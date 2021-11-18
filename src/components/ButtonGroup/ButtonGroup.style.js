import styled from 'styled-components'

export const Container = styled.div`
  .showdates {
    max-width: 95%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    flex-wrap: nowrap;
    padding-left: 1.5rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    & {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }

  .showdate {
    max-width: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${(props) => props.borderColor || 'tomato'};
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;

    &.active {
      background-color: #f5f5f5;
      color: black;
    }
  }

  @media (min-width: 501px) {
    .showdates {
      justify-content: center;
    }
  }
`
