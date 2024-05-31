import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <a key={index} href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">
          <img src={movie.posterUrl}/>
        </a>
      ))}
    </div>
  );
}

export default MovieList;