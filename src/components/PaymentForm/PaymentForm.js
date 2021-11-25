import React, { useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import { Container } from './PaymentForm.style'

const PaymentForm = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    monthExp: '',
    yearExp: '',
    cvv: ''
  })

  const handleChange = (e) => {
    setPaymentInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <Container>
      <Form id="form">
        <Form.Group className="mb-4">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="form-control"
            placeholder="5555 5555 5555 5555"
            inputMode="numeric"
            onChange={handleChange}
            name="cardNumber"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <label htmlFor="cardHolder">Card Holder</label>
          <input
            type="text"
            className="form-control"
            id="cardHolder"
            placeholder="John Doe"
            name="cardHolder"
            onChange={handleChange}
          />
        </Form.Group>
        <Row className="mb-4">
          <Form.Group className="form-group col-md-4">
            <label htmlFor="expirationDate">Expiration Date</label>
            <select
              id="month"
              className="form-control"
              onChange={handleChange}
              name="monthExp"
            >
              <option value="MM">Month</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </Form.Group>
          <Form.Group className="form-group col-md-4">
            <label htmlFor="cvv">&nbsp;</label>
            <select
              id="year"
              className="form-control"
              onChange={handleChange}
              name="yearExp"
            >
              <option value="YY">Year</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
            </select>
          </Form.Group>
          <Form.Group className="form-group col-md-4">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              inputMode="numeric"
              className="form-control"
              id="cvv"
              placeholder="123"
              name="cvv"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <button type="submit" className="btn btn-danger">
          Purchase
        </button>
      </Form>
    </Container>
  )
}

export default PaymentForm
