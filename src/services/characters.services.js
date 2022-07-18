const Personagem = require('../models/characters');

const createCharactersService = async (nome, imagem, userId) => {
  const createdCharacter = await Personagem.create({nome, imagem, user: userId});
  return createdCharacter;
};

const findAllCharactersService = async () => {
  const allCharacters = await Personagem.find();
  return allCharacters;
};

const findByIdCharactersService = async (idparam) => {
  const oneCharacter = await Personagem.findById(idparam);
  return oneCharacter;
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

const searchCharacterService = async (nome) =>
  await Personagem.find({ nome: { $regex: `${nome || ""}`, $options: "i" } });

module.exports = {
  findAllCharactersService,
  findByIdCharactersService,
  createCharactersService,
  updateCharactersService,
  deleteCharactersService,
  searchCharacterService,
};
