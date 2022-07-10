const charactersService = require('../services/characters.services');

const findAllCharactersController = async (req, res) => {
  const allCharacters = await charactersService.findAllCharactersService();
  if(allCharacters.length == 0){
    return res.status(400).send({ message: "Não existe nenhum personagem cadastrado!" });
  }
  res.send(allCharacters);
};

const findByIdCharactersController = async (req, res) => {
  const idParam = req.params.id;
  const selectPersonagem = await charactersService.findByIdCharactersService(idParam);
  res.status(200).send(selectPersonagem);
};

const createCharactersController = async (req, res) => {
  const character = req.body;
  const newCharacter = await charactersService.createCharactersService(character);
  return res.status(200).send({ message: 'Personagem criado com sucesso', data: newCharacter });
};

const updateCharactersController = async (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;
  const updatedCharacter = await charactersService.updateCharactersService(idParam,characterEdit);
  return res.status(200).send(updatedCharacter);
};

const deleteCharactersController = async (req, res) => {
  const idParam = req.params.id;
  await charactersService.deleteCharactersService(idParam);
  res.status(200).send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findAllCharactersController,
  findByIdCharactersController,
  createCharactersController,
  updateCharactersController,
  deleteCharactersController,
};
