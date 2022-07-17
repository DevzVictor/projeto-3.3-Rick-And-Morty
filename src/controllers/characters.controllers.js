const charactersService = require('../services/characters.services');

const findAllCharactersController = async (req, res) => {
  const allCharacters = await charactersService.findAllCharactersService();
  if (allCharacters.length == 0) {
    return res
      .status(400)
      .send({ message: 'Não existe nenhum personagem cadastrado!' });
  }
  res.send(allCharacters);
};

const findByIdCharactersController = async (req, res) => {
  const idParam = req.params.id;
  const selectPersonagem = await charactersService.findByIdCharactersService(
    idParam,
  );
  res.status(200).send(selectPersonagem);
};

const createCharactersController = async (req, res) => {
  try {
    const { nome, imagem } = req.body;
    const { id } = await charactersService.createCharactersService(
      nome,
      imagem,
      req.userId,
    );
    return res.status(200).send({
      message: 'Personagem criado com sucesso',
      Character: { id, nome, imagem },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateCharactersController = async (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;
  const updatedCharacter = await charactersService.updateCharactersService(
    idParam,
    characterEdit,
  );
  return res.status(200).send(updatedCharacter);
};

const deleteCharactersController = async (req, res) => {
  const idParam = req.params.id;
  await charactersService.deleteCharactersService(idParam);
  res.status(200).send({ message: 'Personagem deletado com sucesso!' });
};

const searchCharacterController = async (req, res) => {
  const { nome } = req.query;

  const character = await charactersService.searchCharacterService(nome);

  if (character.length === 0) {
    return res.status(400).send({ message: 'Não existe esse personagem' });
  }

  return res.send(character);
};

module.exports = {
  findAllCharactersController,
  findByIdCharactersController,
  createCharactersController,
  updateCharactersController,
  deleteCharactersController,
  searchCharacterController,
};
