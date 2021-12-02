import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/user/UserContext'
import { Container } from './MyFavorites.style'
import { api } from '../../config'

const MyFavorites = () => {
  const { user } = useContext(UserContext)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const getLikes = (movieLikes) => {
    movieLikes?.forEach((movieId) => {
      axios
        .get(`${api.movie}/${movieId}`)
        .then(({ data: { data } }) => {
          setMovies((prev) => [...prev, data])
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    })
  }

  useEffect(() => {
    if (user?.movieLikes?.length > 0) {
      setLoading(true)
      getLikes(user.movieLikes)
    }
  }, [user])

  const handleMovieDetail = (movieId) => {
    localStorage.setItem('movieIdSelected', movieId)
    history.push('/movie-detail')
  }

  const handleUpdateLikes = (movieLikes) => {
    setMovies([])
  }

  return (
    <Container>
      <h2>My Favorite Movies!</h2>
      <div className="movies-container">
        {!loading &&
          movies?.length > 0 &&
          movies?.map((movie) => (
            <MovieCard
              key={movie._id}
              data={movie}
              onSelect={handleMovieDetail}
              onChange={handleUpdateLikes}
            />
          ))}
      </div>
      {!loading && movies?.length === 0 && (
        <h3 className="empty-title">Your list is empty</h3>
      )}
    </Container>
  )
}

export default MyFavorites
