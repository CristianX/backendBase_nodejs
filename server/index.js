const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.json(
    'Bienvenido al backend del Sistema de Remates Judiciales del Municipio de Quito'
  );
});

// Ruta no encontrada
app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'Error: Ruta no encontrada',
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
