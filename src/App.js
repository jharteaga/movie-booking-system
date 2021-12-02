import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './views/Home/Home'
import MovieDetail from './views/MovieDetail/MovieDetail'
import Showtime from './views/Showtime/Showtime'
import Purchase from './views/Purchase/Purchase'
import Confirmation from './views/Confirmation/Confirmation'
import MyPurchases from './views/MyPurchases/MyPurchases'
import MyFavorites from './views/MyFavorites/MyFavorites'
import ErrorOccurred from './views/ErrorOccurred/ErrorOccurred'
import NotFound from './views/NotFound/NotFound'

import { Container } from './App.style'

const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Switch>
          <Route path="/my-favorites" component={MyFavorites} />
          <Route path="/my-purchases" component={MyPurchases} />
          <Route path="/Confirmation" component={Confirmation} />
          <Route path="/payment" component={Purchase} />
          <Route path="/movie-detail" component={MovieDetail} />
          <Route path="/showtime" component={Showtime} />
          <Route path="/error" component={ErrorOccurred} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
      <Footer />
    </Container>
  )
}

export default App
