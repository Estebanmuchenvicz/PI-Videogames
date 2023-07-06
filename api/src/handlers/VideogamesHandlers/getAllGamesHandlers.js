const {getAllVideoGames} = require ('../../controllers/Videogames/getAllVideogames');
const {gamesByName} =require('../../controllers/Videogames/getGamesByName')

const allGamesHandler = async (req, res) =>{
try {
    const { name } = req.query;
    const response = name ? await gamesByName(name) : await getAllVideoGames();
    res.status(201).json(response);
} catch (error) {
    res.status(400).json({error: error.message});
}
};


module.exports = allGamesHandler;