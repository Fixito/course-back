const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { createCustomError } = require('../errors/custom-error');

const auth = async (req, res, next) => {
  //* check header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new createCustomError(
      'Authentication invalid',
      StatusCodes.UNAUTHORIZED
    );
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      userID: payload.userID,
      name: payload.name
    };

    next();
  } catch (error) {
    throw new createCustomError(
      'Authentication invalid',
      StatusCodes.UNAUTHORIZED
    );
  }
};

module.exports = auth;
