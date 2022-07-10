const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
});

const Personagem = mongoose.model('Personagem', PersonagemSchema, 'personagens');

module.exports = Personagem;
