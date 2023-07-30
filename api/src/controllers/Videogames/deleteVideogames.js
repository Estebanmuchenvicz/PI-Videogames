const { Videogame } = require('../../db');

const deleteGame = async (id) => {
    try {
        const gameDelete = await Videogame.findByPk(id);
        if (!gameDelete) {
            return {error: `No se encontró ningún videojuego con el ID ${id}.`};
        } else{
            await gameDelete.destroy();
            return {message: `El videojuego con ID ${id} ha sido eliminado con éxito.`};
        }
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteGame };
