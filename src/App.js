import React, { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);
  
  const addMovie = (movie) => {
    const newMovies = [...movies, { ...movie, watched: false }];
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  const toggleWatched = (index) => {
    const newMovies = movies.map((movie, i) => (
      i === index ? { ...movie, watched: !movie.watched } : movie
    ));
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} removeMovie={removeMovie} toggleWatched={toggleWatched} />
    </div>
  );
}

export default App;
