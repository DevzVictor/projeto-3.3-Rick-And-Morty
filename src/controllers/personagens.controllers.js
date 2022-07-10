const personagensService = require('../services/personagens.services');

const findAllPersonagensController = async (req, res) => {
  const allCharacters = await personagensService.findAllPersonagensService();
  if(allCharacters.length == 0){
    return res.status(400).send({ message: "Não existe nenhum personagem cadastrado!" });
  }
  console.log(allCharacters);
  res.send(allCharacters);
};

const findByIdPersonagensController = async (req, res) => {
  const idParam = req.params.id;
  const selectPersonagem = await personagensService.findByIdPersonagensService(idParam);
  res.status(200).send(selectPersonagem);
};

const createPersonagensController = async (req, res) => {
  const character = req.body;
  const newCharacter = await personagensService.createPersonagensService(character);
  return res.status(200).send({ message: 'Personagem criado com sucesso', data: newCharacter });
};

const updatePersonagensController = async (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;
  const updatedCharacter = await personagensService.updatePersonagensService(idParam,characterEdit);
  return res.status(200).send(updatedCharacter);
};

const deletePersonagensController = async (req, res) => {
  const idParam = req.params.id;
  await personagensService.deletePersonagensService(idParam);
  res.status(200).send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagensController,
  createPersonagensController,
  updatePersonagensController,
  deletePersonagensController,
};
