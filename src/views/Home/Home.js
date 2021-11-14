import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import { Container } from './Home.style'

const Home = () => {
  return (
    <Container>
      <h1>Welcome to Metrocinema!</h1>
      <MovieCard />
    </Container>
  )
}

export default Home
