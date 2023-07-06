const {Genre} = require('../../db');

const getAllGenres = async()=>{
    const genresBD= await Genre.findAll();
    if(!genresBD) throw Error ({error: 'No hay generos en la base de datos'})
    return genresBD;
};

module.exports = getAllGenres