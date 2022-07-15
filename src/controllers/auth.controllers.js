const authService = require('../services/auth.services');

const loginController = async (req, res) => {
  res.send({ message: 'login ok' });
};

module.exports = {
  loginController,
};
