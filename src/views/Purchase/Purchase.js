import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { MovieContext } from '../../context/movie/MovieContext'
import { UserContext } from '../../context/user/UserContext'
import PaymentForm from '../../components/PaymentForm/PaymentForm'
import Summary from '../../components/Summary/Summary'
import { Container } from './Purchase.style'
import { api } from '../../config'

const Purchase = () => {
  const { movie, seatsSelected, seats } = useContext(MovieContext)
  const { user } = useContext(UserContext)
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
      userId: user.id,
      movie: {
        date: movie.showDate,
        time: movie.showTime,
        seats: seatsSelected,
        total: seatsSelected.length * 7.5
      },
      payment: paymentInfo
    }

    const seatId = localStorage.getItem('seatsId')

    const seatsReq = {
      showDate: movie.showDate,
      showTime: movie.showTime,
      allSeats: seats
    }

    axios
      .post(`${api.movie}/${movie.id}/purchases`, purchaseReq)
      .then((res) => {
        setErrors(error)

        if (seatId.length) {
          return axios.put(`${api.movie}/${movie.id}/seats/${seatId}`, seatsReq)
        } else {
          return axios.post(`${api.movie}/${movie.id}/seats`, seatsReq)
        }
      })
      .then((res) => history.push('/confirmation'))
      .catch((err) => {
        if (err?.response?.status === 400) {
          err?.response?.data?.errors?.forEach(({ message, path }) => {
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
        }

        if (err?.response?.status === 404) {
          history.push('/not-found')
        }

        if (err?.response?.status === 500) {
          history.push({ pathname: '/error', state: { error: err } })
        }

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
