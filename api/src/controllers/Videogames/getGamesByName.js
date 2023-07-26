const { Videogame, Genre } = require('../../db');
const axios = require('axios');
//importo el filtrado para consumir solo lo que necesito de la API
const {apiAllCleaner} = require('../../utils/apiFilter.js')
//se utiliza para busqueda mas especifica 
const {Op} = require('sequelize')

// importo la key de .env
require("dotenv").config();
const { API_KEY } = process.env;

const gamesByName = async (name) => {
  const lowercaseName = name.toLowerCase();
  //consulta por nombre a API
  const dataApi = (
    await axios.get(
      `https://api.rawg.io/api/games?search=${lowercaseName}&key=${API_KEY}`
    )
  ).data;
  //llamo a la función le paso la data de la API para filtrarla
  const apiGames = apiAllCleaner(dataApi);

  const bdGames = await Videogame.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
    include: {
      model: Genre,
      as: 'genres',
      attibutes: ["id", "name"],
      through: {
        attributes: [],
      },
    },
  });

  const response = [...bdGames, ...apiGames].slice(0, 15);

  if (!response.length) throw new Error(`${name} no existe`);

  return response;
};

module.exports = {gamesByName};