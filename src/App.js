import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { Container } from './App.style'
import Home from './views/Home/Home'

const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </Container>
  )
}

export default App
