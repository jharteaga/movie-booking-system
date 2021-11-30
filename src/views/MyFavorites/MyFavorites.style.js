import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  max-width: 95%;
  width: 100%;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  h2 {
    text-align: center;
  }

  .movies-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    grid-template-rows: auto;
    row-gap: 2rem;
    justify-items: center;
    color: white;
  }
`
