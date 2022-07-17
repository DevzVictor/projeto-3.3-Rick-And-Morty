const route = require('express').Router();
const charactersController = require('../controllers/characters.controllers');
const {
  validId,
  validObjectBody,
} = require('../middlewares/characters.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

route.get('/all-characters', charactersController.findAllCharactersController);
route.get(
  '/find-characters/:id',
  authMiddleware,
  validId,
  charactersController.findByIdCharactersController,
);
route.post(
  '/create-characters',
  authMiddleware,
  validObjectBody,
  charactersController.createCharactersController,
);
route.put(
  '/update-characters/:id',
  authMiddleware,
  validId,
  validObjectBody,
  charactersController.updateCharactersController,
);
route.delete(
  '/delete-characters/:id',
  authMiddleware,
  validId,
  charactersController.deleteCharactersController,
);

route.get(
  '/search',
  authMiddleware,
  charactersController.searchCharacterController,
);

module.exports = route;
