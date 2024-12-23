// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/libros', // Cambia según tu backend
});

export default api;
