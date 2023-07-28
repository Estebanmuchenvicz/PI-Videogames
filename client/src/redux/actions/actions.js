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
  POST_GAME,
  FILTER_CREATED,
  FILTER_GENRE,
  FILTER_ORDER,
  FILTER_PLATFORM,
  FILTER_RATING,
  DELETE_GAME
} from "./actions-type";
import axios from "axios";
import Swal from 'sweetalert2'

//GETS GAMES
export const getGames = () => {
  const url = "/videogames";
  return async (dispatch) =>{
    try {
      const response = await axios.get(url);
      const games = response.data;
      return dispatch({
        type: GET_GAMES,
        payload: games,
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


//DELETE GAME

export const deleteGame = (id) => {
  const url = `/games/delete/${id}`;

  return async (dispatch) => {
    try {
      const response = await axios.delete(url);
      if (response.data.message) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: response.data.message,
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
        });
      }
      // Solo si la respuesta contiene un mensaje de éxito, se dispara la acción DELETE_GAME
      return dispatch({
        type: DELETE_GAME,
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al eliminar el favorito',
        });
      }
    }
  };
};


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
        payload: error.response.data.message,
        
      });
    }
  };
};

export const clearSearch = ()=>{
    return{
        type: CLEAR_SEARCH_GAMES
    }
}

//POST GAME
export const createGame = ( game ) => {
  const url = "/videogames/post";
  return async function( dispatch ) {
      try {
        const response = await axios.post( url, game)
        if (response.data.message) {
          Swal.fire({
            icon: 'success',
            text: response.data.message,
          });
        }
        if (response.data.error) {
          Swal.fire({
            icon: 'error',
            text: response.data.error,
          });
        }

          return dispatch({ 
              type: POST_GAME,
              
          })
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message,
          });
        } 
        
      }
  }
};


//FILTERS
export const filterCreated = (payload) =>{
  return{
    type : FILTER_CREATED,
    payload
  }
}

export const filterGenre = (payload) =>{
  return{
    type : FILTER_GENRE,
    payload
  }
}

export const filterPlatform = (payload) =>{
  return{
    type : FILTER_PLATFORM,
    payload
  }
}

export const filterOrder = (payload) =>{
  return{
    type : FILTER_ORDER,
    payload
  }
}

export const filterRating = (payload) =>{
  return{
    type : FILTER_RATING,
    payload
  }
}