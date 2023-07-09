import {
  GET_GAMES,
  GET_GAME_DETAILS,
  GET_DETAILS_FAILURE,
  GET_GAMES_FAILURE,
  CLEAR_GAME_DETAILS,
  GET_GENRES,
  GET_GENRES_FAILURE,
  CLEAR_GENRES,
  SEARCH_GAMES,
  SEARCH_GAMES_FAILURE,
  CLEAR_SEARCH_GAMES,
} from "./actions-type";
import axios from "axios";

//GETS GAMES
export const getGames = () => {
  const url = "/videogames";
  return async (dispatch) =>{
    try {
      const games = await axios.get(url);
      return dispatch({
        type: GET_GAMES,
        payload: games.data,
      });
    } catch (error) {
      dispatch({
        type: GET_GAMES_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const getDetails = (id) => {
  const url = `/videogames/${id}`;
  return async  (dispatch) =>{
    try {
      const detail = await axios.get(url);
      return dispatch({
        type: GET_GAME_DETAILS,
        payload: detail.data,
      });
    } catch (error) {
      dispatch({
        type: GET_DETAILS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const clearDetails = () => ({
  type: CLEAR_GAME_DETAILS,
});

//GET GENRES
export const getGenres = () => {
  const url = "/genres/bd";
  return async (dispatch) =>{
    try {
      const genres = await axios.get(url);
      return dispatch({
        type: GET_GENRES,
        payload: genres.data,
      });
    } catch (error) {
      dispatch({
        type: GET_GENRES_FAILURE,
        payload: error.message,
      });
    }
  };
};
export const clearGenres = () => ({
  type: CLEAR_GENRES,
});

//SEARCH POR NOMBRE
// export const getSearch = (name) => {
//     const url = `/videogames?name=${name}`;
//     return async (dispatch)=>{
//         try {
//           const  games  = await axios.get(url);
//           return{
//             type : SEARCH_GAMES,
//             payload: games.data
//           }
//         } catch (error) {
//            dispatch ({type: SEARCH_GAMES_FAILURE,
//             payload: error.message});
//         }
//     }
// };

export const getSearch = (name) => {
  const url = `/videogames?name=${name}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      const games = response.data;
      console.log(games); // Verifica si los datos se reciben correctamente
      dispatch({
        type: SEARCH_GAMES,
        payload: games,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_GAMES_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const clearSearch = ()=>{
    return{
        type: CLEAR_SEARCH_GAMES
    }
}