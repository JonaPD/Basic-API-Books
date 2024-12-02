// src/App.js
import React, { useState } from 'react';
import LibroList from './components/LibroList';
import LibroForm from './components/LibroForm';

const App = () => {
  const [libros, setLibros] = useState([]);

  const handleLibroAdded = (nuevoLibro) => {
    setLibros((prevLibros) => [...prevLibros, nuevoLibro]);
  };

  return (
    <div>
      <h1>Gestor de Libros 📚</h1>
      <LibroForm onLibroAdded={handleLibroAdded} />
      <LibroList libros={libros} />
    </div>
  );
};

export default App;
