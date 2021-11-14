import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard'
import { api } from '../../config'
import { Container } from './Home.style'

const Home = () => {
  const history = useHistory()
  const [movies, setMovies] = useState([])

  const handleMovieDetail = (movieId) => {
    history.push({
      pathname: '/movie-detail',
      movieId
    })
  }

  useEffect(() => {
    axios
      .get(api.movie)
      .then(({ data: res }) => {
        setMovies(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container>
      <h1>On Theathers!</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            data={movie}
            onSelect={handleMovieDetail}
          />
        ))}
      </div>
    </Container>
  )
}

export default Home
