const {getGenresApi} = require('../../controllers/Genres/getAllGenresApi');

const genresApiHandlers = async(req, res)=>{
try {
    const Genres = await getGenresApi()
    res.status(200).json(Genres)
} catch (error) {
    res.status(400).json({error: error.message})
}
};

module.exports = {genresApiHandlers}