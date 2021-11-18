import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  max-width: 100%;
  width: 100%;
  max-width: 35px;
  width: 100%;

  .seat__cushion {
    max-width: 32px;
    width: 100%;
    height: 22px;
    background-color: ${(props) => props.bgColor || '#fff'};
    border-radius: 3px;
  }

  .seat__back {
    margin-top: 1px;
    max-width: 32px;
    width: 100%;
    /* width: 32px; */
    height: 7px;
    border-radius: 2px;
    background-color: ${(props) => props.bgColor || '#fff'};
  }
`
