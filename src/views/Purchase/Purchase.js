import React from 'react'
import PaymentForm from '../../components/PaymentForm/PaymentForm'
import Summary from '../../components/Summary/Summary'
import { Container } from './Purchase.style'

const Purchase = () => {
  return (
    <Container>
      <Summary />
      <PaymentForm />
    </Container>
  )
}

export default Purchase
