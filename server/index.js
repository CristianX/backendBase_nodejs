const express = require('express');
const morgan = require('morgan');

const logger = require('./config/logger');

const app = express();

// Configurando middleware
app.use(
  morgan('combined', { stream: { write: (message) => logger.info(message) } })
);

app.get('/', (req, res, next) => {
  res.json(
    'Bienvenido al backend del Sistema de Remates Judiciales del Municipio de Quito'
  );
});

// Ruta no encontrada
app.use((req, res, next) => {
  const message = 'Ruta no encontrada';
  const statusCode = 404;

  logger.warn(message);

  res.status(statusCode);
  res.json({
    message,
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  logger.error(message);

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
