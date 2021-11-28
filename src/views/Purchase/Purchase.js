import React from 'react'
import { useHistory } from 'react-router-dom'
import PaymentForm from '../../components/PaymentForm/PaymentForm'
import Summary from '../../components/Summary/Summary'
import { Container } from './Purchase.style'

const Purchase = () => {
  const history = useHistory()

  const handleSubmit = (data) => {
    history.push('/confirmation')
  }

  return (
    <Container>
      <Summary />
      <PaymentForm onSubmit={handleSubmit} />
    </Container>
  )
}

export default Purchase
