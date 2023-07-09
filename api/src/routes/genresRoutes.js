const { Router } = require('express');
const genresRoutes = Router();
const {genresApiHandlers} = require('../handlers/GenresHandlers/getAllGenresApi');
const getGenderBdHandler =require('../handlers/GenresHandlers/getAllGenresBD');
const genresByIdHandlers = require('../handlers/GenresHandlers/getGenresId')

//ruta post de la base de datos a la api


//ruta get de Genre de la bd
genresRoutes.get('/bd', getGenderBdHandler)
genresRoutes.get('/bd/:id', genresByIdHandlers)
genresRoutes.get('/api', genresApiHandlers )
module.exports = genresRoutes