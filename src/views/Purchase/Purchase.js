import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { MovieContext } from '../../context/movie/MovieContext'
import PaymentForm from '../../components/PaymentForm/PaymentForm'
import Summary from '../../components/Summary/Summary'
import { Container } from './Purchase.style'
import { api } from '../../config'

const Purchase = ({ location }) => {
  const { movie, seatsSelected, seats } = useContext(MovieContext)
  const history = useHistory()
  const [errors, setErrors] = useState({})

  const handleSubmit = (paymentInfo) => {
    let error = {
      cardNumber: '',
      cardHolder: '',
      expirationMonth: '',
      expirationYear: '',
      cvv: ''
    }

    const purchaseReq = {
      userId: '6190699eba679222a49e5916',
      movie: {
        date: movie.showDate,
        time: movie.showTime,
        seats: seatsSelected,
        total: seatsSelected.length * 7.5
      },
      payment: paymentInfo
    }

    const seatsId = localStorage.getItem('seatsId')

    const seatsReq = {
      showDate: movie.showDate,
      showTime: movie.showTime,
      allSeats: seats,
      seatId: seatsId
    }

    axios
      .post(`${api.movie}/${movie.id}/purchase`, purchaseReq)
      .then((res) => {
        setErrors(error)

        seatsId !== undefined
          ? axios
              .put(`${api.movie}/${movie.id}/seats`, seatsReq)
              .then((res) => history.push('/confirmation'))
          : axios
              .post(`${api.movie}/${movie.id}/seats`, seatsReq)
              .then((res) => history.push('/confirmation'))
      })
      .catch((err) => {
        console.log('ERROR', err.response)
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
