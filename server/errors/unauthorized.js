const CustomError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class UnAuthorized extends CustomError {
  constructor(message) {
    super(StatusCodes.UNAUTHORIZED, message);
  }
}

module.exports = UnAuthorized;
