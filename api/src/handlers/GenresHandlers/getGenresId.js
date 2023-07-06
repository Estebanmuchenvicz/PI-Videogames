const getGenresById = require('../../controllers/Genres/getAllGenreById')

const genresByIdHandlers = async (req, res)=>{
    try {
        const {id} = req.params;
        const genreID = await getGenresById(id)
        res.status(201).json(genreID)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = genresByIdHandlers;