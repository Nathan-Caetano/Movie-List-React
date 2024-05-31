import React from 'react';
import './App';

function MovieList({ movies, removeMovie }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <button className="remove-button" onClick={() => removeMovie(index)}>X</button>
          <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">
            <img src={movie.posterUrl} alt="Movie Poster"/>
          </a>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
