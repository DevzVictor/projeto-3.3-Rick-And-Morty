const Personagem = require('../models/personagens');

const findAllPersonagensService = async () => {
  const allCharacters = await Personagem.find();
  return allCharacters
};

const findByIdPersonagensService = async (idparam) => {
  const oneCharacter = await Personagem.findById(idparam);
  return oneCharacter;
};

const createPersonagensService = async (newCharacter) => {
  const createdCharacter = await Personagem.create(newCharacter);
  return createdCharacter;
};

const updatePersonagensService = async (idparam, editCharacter) => {
  const updateCharacter = await Personagem.findByIdAndUpdate(
    idparam,
    editCharacter,
  ).setOptions({ returnOriginal: false });
  return updateCharacter;
};

const deletePersonagensService = async (idparam) => {
  return await Personagem.findByIdAndDelete(idparam);
};

module.exports = {
    findAllPersonagensService,
    findByIdPersonagensService,
    createPersonagensService,
    updatePersonagensService,
    deletePersonagensService,
};
