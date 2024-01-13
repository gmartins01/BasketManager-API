const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case 400:
      res.json({
        status: statusCode,
        title: "Validation Failed!",
        message: err.message,
        stackTrace: err.stack
      });
      break;

    case 500:
      res.json({
        status: statusCode,
        title: "Server Error!",
        message: err.message,
        stackTrace: err.stack
      });
      break;
    default:
      break;
  }


};

module.exports = errorHandler;