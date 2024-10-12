const serverErrorHandler = (error, req, res, next) => res.sendStatus(500);

module.exports = { serverErrorHandler };
