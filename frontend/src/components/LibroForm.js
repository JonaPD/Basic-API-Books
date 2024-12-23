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
    cover: 'https://mott.pe/noticias/wp-content/uploads/2016/03/libros-bb.jpg',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/', formData)
      .then((response) => {
        onLibroAdded(response.data);
        setFormData({ title: '', author: '', genre: '', publication_year: '', status: 'Por leer', cover: '' });
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
          <select
            id="genre"
            name="genre"
            className="form-select"
            value={formData.genre}
            onChange={handleChange}
          >
            <option value="Realista">Realista</option>
            <option value="Drama">Drama</option>
            <option value="Novela">Novela</option>
            <option value="Crónica">Crónica</option>
            <option value="Histórica">Histórica</option>
            <option value="Autobiográfica">Autobiográfica</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="Distópica">Distópica</option>
            <option value="Utópica">Utópica</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Thriller">Thriller</option>
            <option value="Detectivesca">Detectivesca</option>
            <option value="Misterio">Misterio</option>
            <option value="Satírica">Satírica</option>
            <option value="Aventuras">Aventuras</option>
            <option value="Romance">Romance</option>
          </select>
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

        <div className="mb-3">
          <label htmlFor="cover" className="form-label">URL de la portada</label>
          <input
            type="text"
            id="cover"
            name="cover"
            className="form-control"
            placeholder="Ingresa la URL de la portada"
            value={formData.cover}
            onChange={handleChange}
          />
        </div>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary w-100">Agregar Libro</button>
      </form>
    </div>
  );
};

export default LibroForm;

