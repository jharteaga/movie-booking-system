import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  margin: 0;
`
