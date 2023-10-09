const CustomError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends CustomError {
  constructor(message) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}

module.exports = BadRequest;
