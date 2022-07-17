const route = require("express").Router();
const charactersController = require('../controllers/characters.controllers');
const {validId,validObjectBody,} = require('../middlewares/characters.middleware');
const authMiddleware = require("../middlewares/auth.middleware");

route.get('/all-characters', charactersController.findAllCharactersController);
route.get(
  '/find-characters/:id',
  validId,
  charactersController.findByIdCharactersController,
);
route.post(
  '/create-characters', 
  authMiddleware, validObjectBody, 
  charactersController.createCharactersController,
);
route.put(
  '/update-characters/:id',
  validId,
  validObjectBody,
  charactersController.updateCharactersController,
);
route.delete(
  '/delete-characters/:id',
  validId,
  charactersController.deleteCharactersController,
);

route.get('/search', charactersController.searchCharacterController);

module.exports = route;
