const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

// Ruta no encontrada
app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'Error: Ruta no encontrada',
  });
});

module.exports = app;
