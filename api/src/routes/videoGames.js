const { Router } = require('express');
const videogamesRoutes = Router();
const allGamesHandler = require('../handlers/VideogamesHandlers/getAllGamesHandlers');
const {gamesByIdHandlers} = require('../handlers/VideogamesHandlers/getGamesIdHandlers');
const postGame = require('../handlers/VideogamesHandlers/postGamesHandler');
const {deleteGameHandler} = require('../handlers/VideogamesHandlers/deleteGameHandlers')

//Routes GET
videogamesRoutes.get('/', allGamesHandler);
videogamesRoutes.get('/:id', gamesByIdHandlers);

//Routes POST
videogamesRoutes.post('/post', postGame);


//Routes delete
videogamesRoutes.delete('/delete/:id', deleteGameHandler);



module.exports = videogamesRoutes;