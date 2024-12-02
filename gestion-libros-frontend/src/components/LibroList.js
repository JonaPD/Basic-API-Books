// src/components/LibroList.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import LibroItem from './LibroItem';

const LibroList = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    // Obtener libros del backend
    api.get('/')
      .then((response) => setLibros(response.data))
      .catch((error) => console.error('Error al obtener libros:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Libros</h2>
      {libros.map((libro) => (
        <LibroItem key={libro._id} libro={libro} />
      ))}
    </div>
  );
};

export default LibroList;
