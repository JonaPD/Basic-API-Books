
//Este archivo usa Mongoose para definir un esquema, que es como un "molde" para los documentos en MongoDB.

const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  publication_year: { type: Number },
  status: { type: String, enum: ["Por leer", "Leyendo", "Leído"], default: "Por leer" }
});

// Mongoose crea automáticamente una colección llamada libros en la base de datos basada en este esquema.
module.exports = mongoose.model('Libro', LibroSchema);
