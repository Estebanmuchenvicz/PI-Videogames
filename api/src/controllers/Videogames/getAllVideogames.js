const { Videogame, Genre } = require('../../db');
const axios = require('axios');
//importo el filtrado para consumir solo lo que necesito de la API
const {apiAllCleaner} = require('../../utils/apiFilter.js')

// importo la key de .env
require('dotenv').config();
const { API_KEY } = process.env;


const getAllVideoGames = async () =>{
    
    //let apiURL = `https://api.rawg.io/api/games?key=${API_KEY}`
    // let apiGames =[];
    // for(let i = 0; i <=5 ; i++){
    //     const dataApi =(await axios.get(apiURL)).data;
    //     //llamo a la función le paso la data de la API para filtrarla
    //     const apiAllGames = apiAllCleaner(dataApi)
    //     //CONCATENO TODO PARA GUARDAR LA INFO DETRO DE UN MISMO ARRAY
    //     apiGames = apiGames.concat(apiAllGames)
    //     // Cambia el valor de la URL por el URL de la pagina siguiente
    //     apiURL = dataApi.next;
    // };

    try {
        const apiGamesPromises = [];
    for (let i = 0; i <= 5; i++) {
        apiGamesPromises.push(axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`));
    }

    const apiGamesResponses = await Promise.all(apiGamesPromises);
    let apiGames = [];
    for (const response of apiGamesResponses) {
        const dataApi = response.data;
        const apiAllGames = apiAllCleaner(dataApi);
        apiGames.push(...apiAllGames);
    }

    //recorrido BD

    const bdGames = await Videogame.findAll({
        include:{
            model: Genre,
            attibutes:["id", "name"],
            through: {
                // y de la tabla intermedia.....
                attributes: [],
            },
        }
    });
    //concateno los datos de la bd y api y lo retorna
    return [...bdGames, ...apiGames];
    } catch (error) {
        throw new Error("Error al obtener los videojuegos.");
    }
    

}


module.exports = {getAllVideoGames};