// src/components/LibroItem.js
import React from 'react';

const LibroItem = ({ libro, onDeleteLibro }) => {
  const handleDelete = () => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar "${libro.title}"?`)) {
      onDeleteLibro(libro._id); // Llama a la función onDeleteLibro con el ID del libro
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{libro.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Autor: {libro.author}</h6>
        <p className="card-text">
          <strong>Género:</strong> {libro.genre || 'N/A'} <br />
          <strong>Año de publicación:</strong> {libro.publication_year || 'N/A'} <br />
          <strong>Estado:</strong> {libro.status}
        </p>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default LibroItem;
