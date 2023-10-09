const { StatusCodes } = require("http-status-codes");

const handleErrors = (err, req, res, next) => {
  console.log(err);

  const error = {
    message: err.message || "Something went wrong",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  if (err.name === "ValidationError") err.statusCode = StatusCodes.BAD_REQUEST;

  if (err.name === "CastError") {
    err.statusCode = StatusCodes.NOT_FOUND;
    error.message = `No item found with id: ${err.value}`;
  }

  if (err.code === 11_000) {
    err.statusCode = StatusCodes.BAD_REQUEST;
    err.message = `Duplicate ${Object.keys(
      err.keyValue
    )}. Please choose another one.`;
  }

  res.status(error.statusCode).json({ message: error.message });
};

module.exports = handleErrors;
