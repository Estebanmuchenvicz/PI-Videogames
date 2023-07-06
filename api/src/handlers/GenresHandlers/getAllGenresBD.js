const getAllGenres = require('../../controllers/Genres/getAllGenres');
const getGenresByName = require('../../controllers/Genres/getGenresByName');

const getGenderBdHandler = async(req, res) =>{
    try {
        const {name} = req.query
        const getGender = name ? await getGenresByName(name) : await getAllGenres()
        res.status(201).json(getGender)
    } catch (error) {
        res.status(400).json({error: error.message});

    }
};

module.exports = getGenderBdHandler;