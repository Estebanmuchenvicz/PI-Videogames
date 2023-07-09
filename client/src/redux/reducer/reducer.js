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
} from "../actions/actions-type";

const initialState = {
  allGames: [],
  error: null,
  gameDetails: [],
  searchGames: [], 
  gamesFilter: [],
  genresFilter:[]

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
    case SEARCH_GAMES: return{
        ...state,
        searchGames: payload,
        
    }
    case SEARCH_GAMES_FAILURE: return{
        ...state,
        error: payload,
        
    }
    case CLEAR_SEARCH_GAMES: return{
        ...state,
        searchGames: [],
        
    }

    default:
      return { ...state };
  }
};

export default reducer;
