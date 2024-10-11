function serverErrorHandler(error, req, res, next) {
  const { responseHandlerOnError } = require('../utils/responseHandler');
  responseHandlerOnError(res, { statusCode: 500, data: null });
}

module.exports = { serverErrorHandler };
