const {Genre} = require('../../db');
const {Op} = require('sequelize')

const getGenresByName = async(name)=>{   
        const GenresName = await Genre.findAll({where:{name: { [Op.iLike]: `%${name}%`}}});
        if(!GenresName.length) throw new Error('El genero no se encuentra en la base de datos');
        return GenresName;

};

module.exports = getGenresByName;