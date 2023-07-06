const { Router } = require('express');
const videogamesRoutes = Router();
const allGamesHandler = require('../handlers/VideogamesHandlers/getAllGamesHandlers');
const {gamesByIdHandlers} = require('../handlers/VideogamesHandlers/getGamesIdHandlers');
const postGame = require('../handlers/VideogamesHandlers/postGamesHandler');
const {deleteGameHandler} = require('../handlers/VideogamesHandlers/deleteGameHandlers')

//Routes GET
videogamesRoutes.get('/videogames', allGamesHandler);
videogamesRoutes.get('/videogames/:id', gamesByIdHandlers);

//Routes POST
videogamesRoutes.post('/videogames', postGame);


//Routes delete
videogamesRoutes.delete('/videogames', deleteGameHandler);



module.exports = videogamesRoutes;