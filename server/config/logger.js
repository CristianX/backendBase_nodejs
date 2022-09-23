const { createLogger, format, transports } = require('winston');

// COnfigurando logger
const logger = createLogger({
  format: format.simple(),
  transports: [new transports.Console()],
});

module.exports = logger;
