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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Agregar un Nuevo Libro</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
        {/* Campo de título */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            placeholder="Ingresa el título"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo de autor */}
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Autor</label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            placeholder="Ingresa el autor"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo de género */}
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Género</label>
          <input
            type="text"
            id="genre"
            name="genre"
            className="form-control"
            placeholder="Ingresa el género"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>

        {/* Campo de año de publicación */}
        <div className="mb-3">
          <label htmlFor="publication_year" className="form-label">Año de publicación</label>
          <input
            type="number"
            id="publication_year"
            name="publication_year"
            className="form-control"
            placeholder="Ingresa el año de publicación"
            value={formData.publication_year}
            onChange={handleChange}
          />
        </div>

        {/* Campo de estado */}
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Estado</label>
          <select
            id="status"
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Por leer">Por leer</option>
            <option value="Leyendo">Leyendo</option>
            <option value="Leído">Leído</option>
          </select>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary w-100">Agregar Libro</button>
      </form>
    </div>
  );
};

export default LibroForm;

