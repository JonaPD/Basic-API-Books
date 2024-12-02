// src/components/LibroItem.js
import React from 'react';

const LibroItem = ({ libro }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{libro.title}</h3>
      <p>Autor: {libro.author}</p>
      <p>Género: {libro.genre}</p>
      <p>Año: {libro.publication_year}</p>
      <p>Estado: {libro.status}</p>
    </div>
  );
};

export default LibroItem;
