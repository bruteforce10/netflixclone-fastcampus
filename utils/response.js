function OK(response, statusCode, data, message) {
  response.status(statusCode).json({
    message,
    data,
    isError: false,
  });
}

function ERR(response, statusCode, message) {
  response.status(statusCode).json({
    message,
    isError: true,
  });
}

module.exports = { OK, ERR };
