const {apiGenresCleaner} = require('../../utils/apiFilter');
const {Genre} = require('../../db');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const getGenresApi = async ()=>{
 try {
     const response = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`))
     const dataApi = response.data.results;
    //  const genresApi = dataApi.map(genre => {
    //     return {
    //       name: genre.name,
          
    //     };
    //   });
    const genresApi =apiGenresCleaner(dataApi)

      await Genre.bulkCreate(genresApi);
    return 'Genres de la API guardados en la DB';
 } catch (error) {
    throw new Error('Se produjo un error al obtener los géneros de la API');
 }
}; 

module.exports = {getGenresApi}