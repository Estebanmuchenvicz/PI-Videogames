const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    //creo una id diferente al de la API
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoincrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    parent_platforms: {
        type: DataTypes.ARRAY(DataTypes.ENUM('Xbox', 'PlayStation', 'Pc', 'Android', 'Nintendo')),
        allowNull: false,
      },
    image: {
        type: DataTypes.STRING,
        validate:{
          isUrl: true, 
        },
        allowNull: false,
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
        validate:{
          isDate: true,  
        },
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        validate:{
          max: 5.0,
          min: 0,
        },
        allowNull: false,
      },
    created:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    
  },
   {
    timestamps: false
  });
};
