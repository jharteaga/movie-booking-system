import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useHistory } from 'react-router-dom'
import { MovieContext } from '../../context/movie/MovieContext'
import { api } from '../../config'
import { Container } from './Home.style'

const Home = () => {
  const { reset } = useContext(MovieContext)
  const history = useHistory()
  const [movies, setMovies] = useState([])

  const handleMovieDetail = (movieId) => {
    localStorage.setItem('movieIdSelected', movieId)
    history.push('/movie-detail')
  }

  useEffect(() => {
    reset()
    axios
      .get(api.movie)
      .then(({ data: res }) => {
        setMovies(res.data)
      })
      .catch((err) => {
        if (err?.response?.status === 404) {
          history.push('/not-found')
        }

        if (err?.response?.status === 500) {
          history.push({ pathname: '/error', state: { error: err } })
        }
      })
  }, [])

  return (
    <Container>
      <h2>On Theathers!</h2>
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
