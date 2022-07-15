const userService = require('../services/users.services');

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!username || !name || !email || !password || !avatar) {
    return res.status(400).send({
      message:
        "Alguns campos estão faltando. os campos são: 'username', 'name', 'email', 'password' ou 'avatar'.",
    });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({ message: 'Usuário já existe!' });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((error) => console.log(error.message));

  if (!user) {
    return res.status(400).send({
      message: 'Erro ao criar Usuário!',
    });
  }

  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  res.send({ message: 'Find All ok' });
};

module.exports = {
  createUserController,
  findAllUserController,
};
