
//Este archivo usa Mongoose para definir un esquema, que es como un "molde" para los documentos en MongoDB.

const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, enum: ["Realista","Drama","Novela", "Crónica","Histórica","Autobiográfica","Ciencia Ficción","Distópica","Utópica","Fantasía","Thriller","Detectivesca","Terror","Misterio","Satírica","Aventuras","Romance"], default: "Terror" },
  publication_year: { type: Number },
  status: { type: String, enum: ["Leído", "Leyendo", "Por leer"], default: "Por leer" },
  cover: { type: String },
});

// Mongoose crea automáticamente una colección llamada libros en la base de datos basada en este esquema.
module.exports = mongoose.model('Libro', LibroSchema);
