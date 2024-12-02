// src/components/LibroItem.js
import React from 'react';

const LibroItem = ({ libro }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{libro.title}</h3>
      <p><b>Autor:</b> {libro.author}</p>
      <p><b>Género:</b> {libro.genre}</p>
      <p><b>Año:</b> {libro.publication_year}</p>
      <p><b>Estado:</b> {libro.status}</p>
    </div>
  );
};

export default LibroItem;
