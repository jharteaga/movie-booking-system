import React from 'react'
import { Container } from './ErrorOccurred.style'

const ErrorOccurred = ({ location: { state: error } }) => {
  return (
    <Container>
      <h2>An error occurred</h2>
      <p>We're sorry about that. Please, try again</p>
    </Container>
  )
}

export default ErrorOccurred
