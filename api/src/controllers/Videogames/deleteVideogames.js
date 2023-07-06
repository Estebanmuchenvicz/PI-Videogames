const {Videogame} = require('../../db')

const deleteGame = async (id) =>{
    const gameDelete = await Videogame.findByPk(id);
    await gameDelete.destroy();
    return (`El video juego con ${id} ha sido eliminado con éxito`)
};


module.exports={deleteGame};