// Un framework para manejar solicitudes HTTP fácilmente.\
// Define rutas y métodos como GET, POST, PUT, y DELETE.
const express = require('express');

// Una biblioteca para interactuar con MongoDB desde Node.js.
// Traduce los objetos JavaScript en documentos MongoDB.
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


// Permitir solicitudes desde cualquier origen (o el frontend específico)
app.use(cors({
  origin: '*', // Permitir todos los orígenes
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

// Middleware 
// bodyParser: Convierte el cuerpo de las solicitudes (JSON enviado por el cliente) 
// en objetos JavaScript que tu servidor puede usa
app.use(bodyParser.json());

// Conexión a MongoDB
// Indica que MongoDB está corriendo localmente y que usaremos la base de datos gestion_libros.
mongoose.connect('mongodb://localhost:27017/gestion_libros', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error("Error de conexión", err));

// Importar rutas
// Define el prefijo /api/libros para todas las rutas relacionadas con libros.
const librosRoutes = require('./routes/Libro');
app.use('/api/libros', librosRoutes);

// Iniciar servidor y lo deja escuchando solicitudes en el puerto especificado
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

