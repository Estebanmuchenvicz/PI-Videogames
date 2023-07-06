const { Router } = require('express');
const genresRoutes = Router();
const {genresApiHandlers} = require('../handlers/GenresHandlers/getAllGenresApi');
const getGenderBdHandler =require('../handlers/GenresHandlers/getAllGenresBD');
const genresByIdHandlers = require('../handlers/GenresHandlers/getGenresId')

//ruta post de la base de datos a la api


//ruta get de Genre de la bd
genresRoutes.get('/genres/bd', getGenderBdHandler)
genresRoutes.get('/genres/bd/:id', genresByIdHandlers)
genresRoutes.get('/genres/api', genresApiHandlers )
module.exports = genresRoutes