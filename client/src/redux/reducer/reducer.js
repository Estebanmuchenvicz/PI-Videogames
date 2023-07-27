import {
  GET_GAMES,
  GET_GAME_DETAILS,
  CLEAR_GAME_DETAILS,
  GET_DETAILS_FAILURE,
  GET_GENRES,
  GET_GENRES_FAILURE,
  CLEAR_GENRES,
  SEARCH_GAMES,
  SEARCH_GAMES_FAILURE,
  CLEAR_SEARCH_GAMES,
  POST_GAME,
  FILTER_CREATED,
  FILTER_GENRE,
  FILTER_ORDER,
  FILTER_PLATFORM,
  FILTER_RATING
} from "../actions/actions-type";

const initialState = {
  allGames: [],
  error: null,
  gameDetails: [],
  searchGames: [], 
  gamesFilter: [],
  genresFilter:[],
  gamePost: {}

};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: payload,
        gamesFilter: payload,
      };
    case GET_GAME_DETAILS:
      return {
        ...state,
        gameDetails: payload,
        error: null,
      };
    case GET_DETAILS_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_GAME_DETAILS:
      return {
        ...state,
        gameDetails: [],
      };
    case GET_GENRES:return{
        ...state,
        genresFilter:payload,
    };
    case GET_GENRES_FAILURE: return{
        ...state,
        error: payload,
    };
    case CLEAR_GENRES: return{
        ...state,
        genreFilters:[],
    }
    case SEARCH_GAMES: 
      if (typeof payload === "object" && payload.message) {
        // Si 'payload' es un objeto con un mensaje de error, actualiza el estado 'error'
        return {
          ...state,
          allGames: [],
          error: payload.message,
        };
      } else {
        // Si 'payload' es una lista de juegos válida, actualiza el estado 'allGames'
        return {
          ...state,
          allGames: payload,
          error: null,
        };
      }
        
    
    case SEARCH_GAMES_FAILURE: return{
        ...state,
        error: { message: payload, statusCode: null },
        
    }
    case CLEAR_SEARCH_GAMES: return{
        ...state,
        searchGames: [],
        
    }
    //Post
    case POST_GAME:
      return{
          ...state,
          gamePost: payload
      }
    //Filters
    case FILTER_CREATED: 
    const gamesCreatedFilter = state.gamesFilter;
    const createdFilter = payload === "created"  
        ? gamesCreatedFilter.filter( game => game.created === true ) 
        : gamesCreatedFilter.filter( game => game.created === false );
    return{
        ...state,
        allGames: payload === "All" ? gamesCreatedFilter : createdFilter,
    };

    case FILTER_GENRE: 
    const gamesGenreFilter = state.gamesFilter;
    const genresFilter = payload === "All"
    ? gamesGenreFilter
    :gamesGenreFilter.filter((game)=>game.genres.map((p)=> p.name).includes(payload))
    return{
      ...state,
      allGames:  genresFilter.length === 0 ? `No games found with the genre ${payload}` : genresFilter
    }

    case FILTER_ORDER: 
    const gamesNameFilter = state.allGames;
    const nameFilter = payload === "ASC"
    ? gamesNameFilter.slice().sort((a,b)=>{
      if ( a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
      else if ( b.name.toLowerCase() < a.name.toLowerCase())return  1;
      return 0;
    })
    : gamesNameFilter.slice().sort((a,b)=>{
      if ( a.name.toLowerCase() > b.name.toLowerCase() ) return -1;
      else if ( b.name.toLowerCase() > a.name.toLowerCase())return  1;
      return 0;
    })
    return{
      ...state,
      allGames:  nameFilter
    }
    case FILTER_RATING: 
    const gameRatingFilter = state.allGames;
    const ratingFilter = payload === "ratingAsc"
    ? gameRatingFilter.slice().sort((a,b)=>{
      if(a.rating < b.rating) return -1;
      if(b.rating < a.rating) return 1;
      return 0;
    })
    : gameRatingFilter.slice().sort((a,b)=>{
      if(a.rating > b.rating) return -1;
      if(b.rating > a.rating) return 1;
      return 0;
    })
    return{
      ...state,
      allGames: ratingFilter
    }
    case FILTER_PLATFORM: 
    const gamesPlatformFilter = state.gamesFilter;
    const platformFilter = gamesPlatformFilter.filter(
      (game)=> game.parent_platforms.map((p)=>p.toLowerCase()).includes(payload))
    return{
      ...state,
      allGames: payload === "All" ? gamesPlatformFilter : platformFilter
    }
    default:
      return { ...state };
  }
};

export default reducer;
