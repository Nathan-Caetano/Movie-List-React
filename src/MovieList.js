import React from 'react';
import './App';

function MovieList({ movies, removeMovie, toggleWatched }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <button className="remove-button" onClick={() => removeMovie(index)}>X</button>
          <button className="watch-button" onClick={() => toggleWatched(index)}>✓</button>
          <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">
            <img src={movie.posterUrl} alt="Movie Poster" className={movie.watched ? 'watched' : ''}/>
          </a>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
