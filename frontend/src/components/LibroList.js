import React, { useState, useEffect } from 'react';
import api from '../api';
import LibroItem from './LibroItem';

const LibroList = () => {
  const [libros, setLibros] = useState([]);
  const [busqueda, setBusqueda] = useState(''); // Estado para búsqueda
  const [filtroEstado, setFiltroEstado] = useState(''); // Estado para filtro por estado
  const [filtroGenero, setFiltroGenero] = useState(''); // Estado para filtro por género

  useEffect(() => {
    // Obtener libros del backend
    api.get('/')
      .then((response) => setLibros(response.data))
      .catch((error) => console.error('Error al obtener libros:', error));
  }, []);

  // Función para manejar búsqueda y filtros
  const librosFiltrados = libros.filter((libro) => {
    const coincideBusqueda =
      libro.title.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.author.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEstado = filtroEstado ? libro.status === filtroEstado : true;
    const coincideGenero = filtroGenero ? libro.genre === filtroGenero : true;

    return coincideBusqueda && coincideEstado && coincideGenero;
  });

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

      {/* Campos de búsqueda y filtros */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Buscar por título o autor"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select
          className="form-select mb-2"
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
        >
          <option value="">Filtrar por estado</option>
          <option value="Por leer">Por leer</option>
          <option value="Leyendo">Leyendo</option>
          <option value="Leído">Leído</option>
        </select>
        <select
          className="form-select"
          value={filtroGenero}
          onChange={(e) => setFiltroGenero(e.target.value)}
        >
          <option value="">Todo</option>
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

      {/* Lista de libros filtrados */}
      {librosFiltrados.length > 0 ? (
        <div className="row">
          {librosFiltrados.map((libro) => (
            <div key={libro._id} className="col-md-4 mb-4">
              <LibroItem libro={libro} onDeleteLibro={handleDeleteLibro} />
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning text-center" role="alert">
          No se encontraron libros que coincidan con los criterios.
        </div>
      )}
    </div>
  );
};

export default LibroList;
