const CustomError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class NotFound extends CustomError {
  constructor(message) {
    super(StatusCodes.NOT_FOUND, message);
  }
}

module.exports = NotFound;
