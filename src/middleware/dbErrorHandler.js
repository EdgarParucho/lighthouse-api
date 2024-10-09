const { responseHandlerOnError } = require('../utils/responseHandler');

const isDBValidationError = (error) => {
  return error instanceof require('sequelize').ValidationError;
}

const isDBConnectionError = (error) => {
  const {
    ConnectionRefusedError,
    ConnectionTimedOutError,
    ConnectionError,
  } = require('sequelize');

  const isConnectionError = [
    ConnectionRefusedError,
    ConnectionTimedOutError,
    ConnectionError,
  ].some(connectionError => error instanceof connectionError);
  return isConnectionError;
}

function dbErrorHandler(error, req, res, next) {

  const isValidationError = isDBValidationError(error);
  if (isValidationError) return responseHandlerOnError(res, {
    statusCode: 409,
    message: error.message,
  })

  const isConnectionError = isDBConnectionError(error);
  if (isConnectionError) return responseHandlerOnError(res, {
    statusCode: 503,
    message: 'Service is temporarily unavailable.',
  })

  next(error);
}

module.exports = { dbErrorHandler };
