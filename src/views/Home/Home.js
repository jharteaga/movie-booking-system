import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard'
import { api } from '../../config'
import { Container } from './Home.style'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get(api.movie)
      .then(({ data: res }) => {
        console.log(res.data)
        setMovies(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container>
      <h1>On Theathers!</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard key={movie._id} data={movie} />
        ))}
      </div>
    </Container>
  )
}

export default Home
