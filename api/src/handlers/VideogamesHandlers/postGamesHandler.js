const {createGame} = require('../../controllers/Videogames/postGame');

const postGame = async (req,res) => {
    try {
        const {name, description,releaseDate, parent_platforms,image,rating,genres} = req.body;
        
        const newGame = await createGame(name, description,releaseDate, parent_platforms,image,rating,genres)
          res.status(201).json({newGame, menssage: 'Fue creado correctamente'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = postGame;