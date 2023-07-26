const {Genre} = require('../../db');
const {genresApiHandlers} = require('../../handlers/GenresHandlers/getAllGenresApi')
// const {apiGenresCleaner} = require('../../utils/apiFilter');
// const axios = require('axios');
// require('dotenv').config();
// const { API_KEY } = process.env;
const getAllGenres = async()=>{
    const genresBD= await Genre.findAll();
    if(!genresBD.length){
        // try {
        //     const response = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`))
        //     const dataApi = response?.data.results;
        //    const genresApi =apiGenresCleaner(dataApi)
        //      await Genre.bulkCreate(genresApi);
        //    return 'Genres de la API guardados en la DB';
        // } catch (error) {
        //    throw new Error('Se produjo un error al obtener los géneros de la API');
        // }
        genresApiHandlers()
    }
    return genresBD;
};

module.exports = getAllGenres