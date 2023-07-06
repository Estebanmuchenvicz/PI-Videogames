const {Videogame} = require('../../db');
const {Op} = require('sequelize')

const createGame = async (name, description,releasedDate, parent_platforms,image,rating,genres) => {
  if (
    !name ||
    !description ||
    !releasedDate ||
    !parent_platforms ||
    !image ||
    !rating
  )
    return res.status(400).send("Faltan datos");
  // Transformación del nombre
  const formattedName = name
    .toLowerCase()
    .split(" ")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join(" ");

  const game = await Videogame.findOne({
    where: { name: { [Op.iLike]: `%${formattedName}%` } },
  });

  if (game) throw new Error(`El juego ya fue creado, su id es ${game.id}`);

  const newGame = await Videogame.create({
    name: formattedName,
    description,
    parent_platforms,
    image,
    releasedDate,
    rating,
  });

  // Esto me relaciona el videojuego con el género mediante la tabla intermedia
  await newGame.addGenre(genres);

  return newGame;
};

module.exports = {createGame};