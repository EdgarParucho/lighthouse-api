const { UnauthorizedError } = require('express-oauth2-jwt-bearer');

function authErrorHandler(error, req, res, next) {
  if (error instanceof UnauthorizedError) return res.sendStatus(401);
  else next(error);
}

module.exports = { authErrorHandler };
