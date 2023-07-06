const {Genre} = require('../../db');

const getGenresById = async (id)=>{

        const genres = await Genre.findByPk(id)
        if(!genres)throw new Error(`No existe Genres con el ${id}`);
        return genres;
  
};

module.exports = getGenresById;