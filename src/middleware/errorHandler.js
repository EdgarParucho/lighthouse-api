function authErrorHandler(error, req, res, next) {
  const { UnauthorizedError } = require('express-oauth2-jwt-bearer');
  if (error instanceof UnauthorizedError) return res.sendStatus(401);
  else next(error);
}

function dbErrorHandler(error, req, res, next) {
  const { ConnectionError, ValidationError, DatabaseError } = require('sequelize');
  if (error instanceof ConnectionError) res.sendStatus(503);
  else if (error instanceof ValidationError) res.sendStatus(409);
  else if (error instanceof DatabaseError) res.sendStatus(500);
  else next(error);
}

function serverErrorHandler(error, req, res, next) {
  return res.sendStatus(500);
}

module.exports = [authErrorHandler, dbErrorHandler, serverErrorHandler];
