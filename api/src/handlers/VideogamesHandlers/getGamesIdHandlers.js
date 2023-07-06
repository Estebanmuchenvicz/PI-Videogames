const {gamesById} = require('../../controllers/Videogames/getGamesById')

const gamesByIdHandlers = async (req, res) => {
    try {
        const {id} = req.params;
        const filter = isNaN(id) ? "db" : "api";
        const response = await gamesById(id, filter)
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports ={gamesByIdHandlers}