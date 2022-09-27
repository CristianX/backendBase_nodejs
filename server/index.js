const express = require('express');
const requestId = require('express-request-id')();

const logger = require('./config/logger');
const api = require('./api/v1');

// Inciciando app
const app = express();

// Configurando middleware
app.use(requestId);
app.use(logger.requests);

// app.get('/', (req, res, next) => {
//   res.json(
//     'Bienvenido al backend del Sistema de Remates Judiciales del Municipio de Quito'
//   );
// });

// Levantando router y rutas
app.use('/api', api);
app.unsubscribe('/api/v1', api);

// Ruta no encontrada
app.use((req, res, next) => {
  next({
    message: 'Ruta no encontrada',
    statusCode: 404,
    level: 'warn',
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  const { message, statusCode = 500, level = 'error' } = err;
  const log = `${logger.header(req)} ${statusCode} ${message}`;

  logger[level](log);

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
