import React, { useState } from 'react';

function MovieForm({ addMovie }) {
  const [posterUrl, setPosterUrl] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (posterUrl.endsWith('jpg')) {
      addMovie({ posterUrl, trailerUrl });
      setPosterUrl('');
      setTrailerUrl('');
    } else {
      alert('Favor verificar se a imagem está em jpg');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="posterUrl">Insira endereço de imagem</label>
        <input
          type="text"
          id="posterUrl"
          placeholder='Url da igmagem'
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="trailerUrl">URL do video!</label>
        <input
          type="text"
          id="trailerUrl"
          placeholder='Url do vídeo'
          value={trailerUrl}
          onChange={(e) => setTrailerUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">Adicionar Filme</button>
    </form>
  );
}

export default MovieForm;