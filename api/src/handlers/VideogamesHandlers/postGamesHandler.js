const {createGame} = require('../../controllers/Videogames/postGame');

const postGame = async (req,res) => {
    try {
        const {name, description,releaseDate, parent_platforms,image,rating,genres} = req.body;
        const result = await createGame(name, description, releaseDate, parent_platforms, image, rating, genres);

        if (result.existingGame) {
          const existingGameName = result.existingGame.name;
          res.status(201).json({ error: `El juego ${existingGameName} ya fue creado, su id es ${result.existingGame.id}` });
        } else {
          const newGame = result;
          res.status(201).json({ newGame, message: `El juego con name: ${newGame.name} fue cargado correctamente` });
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = postGame;