const Personagem = require('../models/characters');

const findAllCharactersService = async () => {
  const allCharacters = await Personagem.find();
  return allCharacters;
};

const findByIdCharactersService = async (idparam) => {
  const oneCharacter = await Personagem.findById(idparam);
  return oneCharacter;
};

const createCharactersService = async (newCharacter) => {
  const createdCharacter = await Personagem.create(newCharacter);
  return createdCharacter;
};

const updateCharactersService = async (idparam, editCharacter) => {
  const updateCharacter = await Personagem.findByIdAndUpdate(
    idparam,
    editCharacter,
  ).setOptions({ returnOriginal: false });
  return updateCharacter;
};

const deleteCharactersService = async (idparam) => {
  return await Personagem.findByIdAndDelete(idparam);
};

const searchCharacterService = (nome) =>
  Personagem.find({ message: { $regex: `${nome || ''}`, $options: 'i' } })

module.exports = {
  findAllCharactersService,
  findByIdCharactersService,
  createCharactersService,
  updateCharactersService,
  deleteCharactersService,
  searchCharacterService,
};
