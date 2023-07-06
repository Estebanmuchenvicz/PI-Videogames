const {createGame} = require('../../controllers/Videogames/postGame');

const postGame = async (req,res) => {
    try {
        const {name, description,releasedDate, parent_platforms,image,rating,genres} = req.body;
        
        const newGame = await createGame(name, description,releasedDate, parent_platforms,image,rating,genres)
          res.status(201).json({newGame, menssge: 'Fue creado corrctamente'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = postGame;