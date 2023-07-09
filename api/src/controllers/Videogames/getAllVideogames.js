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

    // let apiURL = `https://api.rawg.io/api/games?key=${API_KEY}`
    // let apiGames =[];
    // for(let i = 0; i <=5 ; i++){
    // const dataApi =(await axios.get(apiURL)).data;
    // //llamo a la función le paso la data de la API para filtrarla
    // const apiAllGames = apiAllCleaner(dataApi)
    // //CONCATENO TODO PARA GUARDAR LA INFO DETRO DE UN MISMO ARRAY
    // apiGames = apiGames.concat(apiAllGames)
    // //     // Cambia el valor de la URL por el URL de la pagina siguiente
    //  apiURL = dataApi.next;
    //  };
    // let apiURL = `https://api.rawg.io/api/games?key=${API_KEY}`
    //     const apiGamesPromises = [];
    // for (let i = 0; i <= 5; i++) {
    // apiGamesPromises.push(axios.get(apiURL));
       
    // }
    let apiURL = `https://api.rawg.io/api/games?key=${API_KEY}`;
    const apiGamesPromises = [];
    const totalPages = 5; // Número total de páginas a recorrer
    let currentPage = 1; // Página actual

    for (let i = 0; i < totalPages; i++) {
      apiGamesPromises.push(axios.get(apiURL));

      currentPage++; // Incrementar la página actual
      apiURL = `https://api.rawg.io/api/games?key=${API_KEY}&page=${currentPage}`;
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