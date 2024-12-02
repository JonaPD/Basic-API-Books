// src/components/LibroForm.js
import React, { useState } from 'react';
import api from '../api';

const LibroForm = ({ onLibroAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publication_year: '',
    status: 'Por leer',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/', formData)
      .then((response) => {
        onLibroAdded(response.data);
        setFormData({ title: '', author: '', genre: '', publication_year: '', status: 'Por leer' });
      })
      .catch((error) => console.error('Error al agregar libro:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Título"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="Autor"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        name="genre"
        placeholder="Género"
        value={formData.genre}
        onChange={handleChange}
      />
      <input
        name="publication_year"
        type="number"
        placeholder="Año de publicación"
        value={formData.publication_year}
        onChange={handleChange}
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Por leer">Por leer</option>
        <option value="Leyendo">Leyendo</option>
        <option value="Leído">Leído</option>
      </select>
      <button type="submit">Agregar Libro</button>
    </form>
  );
};

export default LibroForm;
