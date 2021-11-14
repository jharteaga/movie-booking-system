import React from 'react'

const MovieDetail = ({ location: { movie } }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  )
}

export default MovieDetail
