function responseHandlerOnSuccess(res, serviceData) {
  const { statusCode, message, data } = serviceData;
  res.status(statusCode).json({
    statusCode: statusCode || 200,
    message: message || 'OK.',
    data: data || null,
  });
}

function responseHandlerOnError(res, errorData) {
  const { statusCode, message } = errorData;
  res.status(statusCode || 500).json({
    statusCode: statusCode || 500,
    message: errorData.response?.data?.message || message || 'Internal server error.',
    data: null,
  });
}

module.exports = {
  responseHandlerOnSuccess,
  responseHandlerOnError,
};
