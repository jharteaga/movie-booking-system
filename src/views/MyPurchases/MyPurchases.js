import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion'
import { formatDate } from '../../utils/datetime'
import { UserContext } from '../../context/user/UserContext'
import { Container } from './MyPurchases.style'
import { api } from '../../config'

const MyPurchases = () => {
  const { user } = useContext(UserContext)
  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user?.id) {
      setLoading(true)
      axios
        .get(`${api.user}/${user.id}/purchases`)
        .then(({ data: { data } }) => {
          return data.map((purchase) => {
            return axios
              .get(`${api.movie}/${purchase.movieId}`)
              .then(({ data: { data } }) => {
                return {
                  ...purchase,
                  movie: data
                }
              })
              .then((res) => setPurchases((prev) => [...prev, res]))
              .finally(() => setLoading(false))
          })
        })
        .catch((err) => {
          if (err?.response?.status === 404) {
            history.push('/not-found')
          }

          if (err?.response?.status === 500) {
            history.push({ pathname: '/error', state: { error: err } })
          }
        })
    }
  }, [user])

  return (
    <Container>
      <h2 className="title">My Purchases</h2>
      {!loading && purchases.length > 0 && (
        <Accordion>
          {purchases.map((purchase, index) => (
            <Accordion.Item key={purchase._id} eventKey={index}>
              <Accordion.Header>{purchase.movie.title}</Accordion.Header>
              <Accordion.Body>
                <div className="purchase-detail">
                  <p>
                    <span>Purchase Datetime:</span>{' '}
                    {formatDate(purchase.createdAt, 'datetime')}
                  </p>
                  <p>
                    <span>Movie date:</span>{' '}
                    {formatDate(purchase.movieDate, 'date')}
                  </p>
                  <p>
                    <span>Movie time:</span> {purchase.movieTime}
                  </p>
                  <p>
                    <span>Seats:</span>{' '}
                    {purchase.seats.reduce(
                      (accum, current, index) => `${accum}, ${current}`
                    )}
                  </p>
                  <p>
                    <span>Total:</span> ${purchase.total.toFixed(2)}
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
      {!loading && user?.id && purchases.length === 0 && (
        <h3 className="empty-title">You have not made any purchase</h3>
      )}
    </Container>
  )
}

export default MyPurchases
