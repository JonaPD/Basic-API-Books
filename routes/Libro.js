const express = require('express');
const router = express.Router();
const Libro = require('../models/libro');

// Crear un libro
router.post('/', async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    const libroGuardado = await nuevoLibro.save();
    res.status(201).json(libroGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un libro por ID
router.get('/:id', async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) return res.status(404).json({ message: "Libro no encontrado" });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Actualizar un libro
router.put('/:id', async (req, res) => {
  try {
    const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(libroActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Eliminar un libro
router.delete('/:id', async (req, res) => {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({ message: "Libro eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
