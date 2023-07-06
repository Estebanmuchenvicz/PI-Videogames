const {deleteGame} = require('../../controllers/Videogames/deleteVideogames');

const deleteGameHandler = async(req, res)=>{
    try {
        const {id} = req.params;
        const response = await deleteGame(id);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {deleteGameHandler}