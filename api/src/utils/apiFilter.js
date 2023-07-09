const apiAllCleaner = ( dataApi ) => {
    return dataApi.results?.map( game => {
        return {
            id: game.id,
            name: game.name,
            image: game.background_image,
            parent_platforms: game.parent_platforms?.map(platforms => platforms.platform.name),
            releaseDate: game.released,
            rating: game.rating, 
            genres: game.genres?.map(genre => {return {
                id: genre.id,
                name: genre.name,
            }}),
            created: false,
        }
    })
}

const apiIdCleaner = ( dataApi ) => {
    return {
        id: dataApi.id,
        name: dataApi.name,
        image: dataApi.background_image,
        description: dataApi.description,
        parent_platforms: dataApi.parent_platforms.map(platforms => platforms.platform.name),
        releaseDate: dataApi.released,
        rating: dataApi.rating, 
        genres: dataApi.genres.map(genre => {return {
            id: genre.id,
            name: genre.name,
        }}),
        created: false,
    }
}

const apiGenresCleaner = ( dataApi ) => {
    const genresApi = dataApi.map(genre => {
        return {
          name: genre.name,
          
        };
      });
      return genresApi;
}

module.exports = {
    apiAllCleaner,
    apiIdCleaner,
    apiGenresCleaner
}