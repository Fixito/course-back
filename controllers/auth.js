const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new createCustomError(
      'email ou password manquant',
      StatusCodes.BAD_REQUEST
    );
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new BadRequestError('Saisissez un email et un mot de passe');
  }

  //* compare password
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Identifiants incorrects');
  }

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user: user.name, token });
};

module.exports = { register, login };
