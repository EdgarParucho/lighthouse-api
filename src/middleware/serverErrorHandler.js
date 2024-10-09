const { responseHandlerOnError } = require('../utils/responseHandler');

function serverErrorHandler(error, req, res, next) {
  responseHandlerOnError(res, {
    statusCode: 500,
    message: 'Internal Server Error.',
  });
}

module.exports = { serverErrorHandler };
