import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './views/Home/Home'
import MovieDetail from './views/MovieDetail/MovieDetail'
import Showtime from './views/Showtime/Showtime'

import { Container } from './App.style'

const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Switch>
          <Route path="/movie-detail" component={MovieDetail} />
          <Route path="/showtime" component={Showtime} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
      <Footer />
    </Container>
  )
}

export default App
