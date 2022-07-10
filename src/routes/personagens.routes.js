const express = require('express');
const route = express.Router();
const personagensController = require('../controllers/personagens.controllers');
const { validId,validObjectBody, } = require('../middlewares/personagens.middleware');

route.get('/all-personagens', personagensController.findAllPersonagensController);
route.get('/find-personagens/:id', validId, personagensController.findByIdPersonagensController);
route.post('/create-personagens', validObjectBody, personagensController.createPersonagensController);
route.put('/update-personagens/:id', validId, validObjectBody, personagensController.updatePersonagensController)
route.delete('/delete-personagens/:id', validId, personagensController.deletePersonagensController)

module.exports = route;
