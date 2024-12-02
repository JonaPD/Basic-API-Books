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

  const handleDeleteLibro = (id) => {
    // Llamada al backend para eliminar el libro
    api.delete(`/${id}`)
      .then(() => {
        // Eliminar el libro de la lista local
        setLibros((prevLibros) => prevLibros.filter((libro) => libro._id !== id));
      })
      .catch((error) => console.error('Error al eliminar libro:', error));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Lista de Libros</h2>
      {libros.length > 0 ? (
        <div className="row">
          {libros.map((libro) => (
            <div key={libro._id} className="col-md-4 mb-4">
              <LibroItem libro={libro} onDeleteLibro={handleDeleteLibro} />
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning text-center" role="alert">
          No hay libros disponibles. ¡Agrega uno para comenzar!
        </div>
      )}
    </div>
  );
};

export default LibroList;
