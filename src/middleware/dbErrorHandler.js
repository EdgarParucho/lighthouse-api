function dbErrorHandler(error, req, res, next) {
  const { responseHandlerOnError } = require('../utils/responseHandler');
  
  const isConnectionError = error instanceof require('sequelize').ConnectionError;
  if (isConnectionError) return responseHandlerOnError(res, { statusCode: 503 });

  const isValidationError = error instanceof require('sequelize').ValidationError;
  if (isValidationError) return responseHandlerOnError(res, { statusCode: 409 });

  const isDatabaseError = error instanceof require('sequelize').DatabaseError;
  if (isDatabaseError) return responseHandlerOnError(res, { statusCode: 500 });

  next(error);
}

module.exports = { dbErrorHandler };
