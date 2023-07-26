const { Videogame, Genre } = require('../../db');
const axios = require('axios');
//importo el filtrado para consumir solo lo que necesito de la API
const {apiIdCleaner} = require('../../utils/apiFilter.js')

// importo la key de .env
require('dotenv').config();
const { API_KEY } = process.env;


const gamesById = async (id, filter)=>{
    if(filter ==="api"){
        const dataApi = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
        const apiGames = apiIdCleaner(dataApi);
        return apiGames;
    } else{
        const response = await Videogame.findByPk(id,{
            include:{
                model: Genre,
                as: 'genres',
                attibutes:["id", "name"],
                through: {
                    attributes: [],
                },
            }
        });
        if(!response) throw new Error('no existe ese id')
        return response;
        
    }
}

module.exports = {gamesById};