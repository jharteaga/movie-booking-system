import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0;

  main {
    flex-grow: 1;
  }
`
