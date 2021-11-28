import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import PaymentForm from '../../components/PaymentForm/PaymentForm'
import Summary from '../../components/Summary/Summary'
import { Container } from './Purchase.style'

const Purchase = () => {
  const history = useHistory()
  const [errors, setErrors] = useState({})

  const handleSubmit = (paymentInfo) => {
    axios
      .post('/api/v1/purchase', paymentInfo)
      .then((res) => history.push('/confirmation'))
      .catch((err) => {
        let error = {
          cardNumber: '',
          cardHolder: '',
          expirationMonth: '',
          expirationYear: '',
          cvv: ''
        }
        err.response.data.errors.forEach(({ message, path }) => {
          if (path[0] === 'cardNumber') {
            return (error.cardNumber = message)
          }
          if (path[0] === 'cardHolder') {
            return (error.cardHolder = message)
          }
          if (path[0] === 'expirationMonth') {
            return (error.expirationMonth = message)
          }
          if (path[0] === 'expirationYear') {
            return (error.expirationYear = message)
          }
          if (path[0] === 'cvv') {
            return (error.cvv = message)
          }
        })

        setErrors(error)
      })
  }

  return (
    <Container>
      <Summary />
      <PaymentForm onSubmit={handleSubmit} errors={errors} />
    </Container>
  )
}

export default Purchase
