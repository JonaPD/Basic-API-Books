# Sistema de Gestión de Libros 📚

## Descripción
Un sistema básico para gestionar una colección personal de libros. Este proyecto permite:
- Agregar libros con información como título, autor, género y estado.
- Consultar, actualizar y eliminar libros.
- Filtrar libros por estado o género

## Tecnologías utilizadas
- **MongoDB**: Base de datos NoSQL para almacenar los datos.
- **Node.js**: Servidor backend.
- **Express.js**: Framework para construir la API REST.
- **Mongoose**: ODM para interactuar con MongoDB.

## Requisitos previos
Antes de comenzar, asegúrate de tener instalados:
- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Instalación y configuración
1. Clona este repositorio:
   ```bash
   git clone https://github.com/JonaPD/Basic-API-Books.git
   cd Basic-API-Books
2. Abre la ruta con un editor de texto de preferencia preferiblemente Visual Studio Code
3. instala las dependencias necesarias
   ```bash
   npm init -y
   npm install express mongoose body-parser
4. En la ruta de backend ejecuta:
   ```bash
   node server.js
5. En la ruta de frontend ejecuta:
   ```bash
   npm start
6. Puedes comprobar en la base de datos de MongoDB o usar MongoDB Compass que se ha creado una base de datos y una coleccion cuando agreges un nuevo libro.
   ```bash
   mongosh
   use gestion_libros
   show dbs
