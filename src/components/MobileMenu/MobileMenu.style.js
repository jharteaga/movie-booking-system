import styled from 'styled-components'

export const Container = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
`
