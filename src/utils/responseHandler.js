function responseHandlerOnSuccess(res, { statusCode = 200, data = null }) {
  res.status(statusCode).json({
    statusCode,
    data,
  });
}

function responseHandlerOnError(res, { statusCode = 500 }) {
  res.status(statusCode).json({
    statusCode,
    data: null,
  });
}

module.exports = {
  responseHandlerOnSuccess,
  responseHandlerOnError,
};
