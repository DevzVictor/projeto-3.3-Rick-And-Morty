const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const character = req.body;
  if (!character.nome || !character.imagem) {
    return res.status(400).send({ message: 'Não envie nehum campo vazio!' });
  }

  next();
};

module.exports = {
  validId,
  validObjectBody,
};
