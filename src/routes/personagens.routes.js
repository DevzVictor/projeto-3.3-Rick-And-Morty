const express = require('express');
const route = express.Router();
const personagensController = require('../controllers/personagens.controllers');
const { validId,validObjectBody, } = require('../middlewares/personagens.middleware');

route.get('/all-personagens', personagensController.findAllPersonagensController);
route.get('/find-personagens/:id', personagensController.findByIdPersonagensController);
route.post('/create-personagens', personagensController.createPersonagensController);
route.put('update-personagens/:id', personagensController.updatePersonagensController)
route.delete('delete-personagens/:id', personagensController.deletePersonagensController)

module.exports = route;
