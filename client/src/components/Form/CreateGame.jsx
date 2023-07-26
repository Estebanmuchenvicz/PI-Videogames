import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getGenres, createGame} from '../../redux/actions/actions';
import styles from './create.module.css';
import { validateGame } from '../../utils/validate';

function CreateGame() {
    const initState = {
        name:"",
        image: "",
        description:"",
        parent_platforms:[],
        releaseDate:"",
        rating:0,
        genres:[]
    }

    const [newGame, setNewGame] = useState(initState)
    const [errors, setErrors] = useState({        
    name:"",
    image: "",
    description:"",
    parent_platforms:"",
    releaseDate:"",
    rating:"",
    genres:""});

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres())
    },[dispatch])
    const genres = useSelector(state => state.genresFilter)
    console.log(newGame.genres);
    const [ platformsOptions] = useState([
        "Android", 
        "Nintendo", 
        "Pc", 
        "PlayStation", 
        "Xbox"
    ]);



    const handleChange = (event) => {
        const { name, value } = event.target
        const parsedValue = name === 'rating' ? parseFloat(value) : value;
        setNewGame({ ...newGame, [name]: parsedValue })
        setErrors(validateGame({ ...newGame, [name]: parsedValue }));
          
      }

          // Envia los datos al reducer
    const handleSubmit = (event) => {
        event.preventDefault()
  // Validar el juego
  const validationErrors = validateGame(newGame);

  // Actualizar los errores
  setErrors(validationErrors);

  // Si no hay errores, enviar los datos al reducer
  if (Object.keys(errors).length !== 0) {
    const genreIds = newGame.genres.map((genre) => genre.id);
    const gameData = { ...newGame, genres: genreIds };
    dispatch(createGame(gameData));
    setNewGame(initState)
  }
};

    const handleGenreSelect = (event)=>{
        
            const { value } = event.target
        
            if (newGame.genres.some((gen) => gen.id === +value)) return
        
            const genre = genres.find((gen) => gen.id === +value)
            setNewGame({ ...newGame, genres: [...newGame.genres, genre] })
    }

    const handleDeleteGenres = (id)=>{
        setNewGame({
            ...newGame,
            genres: newGame.genres.filter((gen) => gen.id !== id)
          })
    }

    
      // Plataformas
  const handlePlatformSelect = (event) => {
    const platform = event.target.value;

    // Si la plataforma ya esta guardada en el estado newGame o si esta vacio y terminara la ejecucion
    if (newGame.parent_platforms.includes(platform)) return;
    if (platform === "") return;

    // Guarda la plataforma en el estado newGame.parent_platforms
    setNewGame({
      ...newGame,
      parent_platforms: [...newGame.parent_platforms, platform],
    });

    // Eliminar la gestión del estado platformSelect
    // setPlatformSelect([...platformSelect, platform]);
  };

  const handlePlatformDelete = (evento) => {
    const value = evento.target.value;
    setNewGame({
      ...newGame,
      parent_platforms: newGame.parent_platforms.filter(
        (platform) => platform !== value
      ),
    });
    // Eliminar la gestión del estado platformSelect
    // setPlatformSelect(platformSelect.filter((platform) => platform !== value));
  };

  const [rating, setRating] = useState(0);


  return (
    <div className={styles.container}>
        <div><h2>Create New Game</h2></div>
        <form action="" onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
            <label htmlFor="name">Name </label>
            <input type="text" name="name" onChange={handleChange} value={newGame.name} placeholder='Name the game'/>
            {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="image">Image URL </label>
                <input type="url" name="image" onChange={handleChange} value={newGame.image} placeholder='https://example/image.png'/>
                {errors.image && <p className={styles.error}>{errors.image}</p>}
            </div>
            <div>
                <label htmlFor="description">Description </label>
                <textarea placeholder="Enter a description of the game" name="description" onChange={handleChange} value={newGame.description}></textarea>
                {errors.description && <p className={styles.error}>{errors.description}</p>}
            </div>
            <div className="platformList">
                            <div className="sectionInputCG">
                                <label  htmlFor="parent_platforms"> Platforms * </label>
                                <select  name="parent_platforms" onChange={ handlePlatformSelect }>
                                    <option  value=""> Select </option>
                                        {
                                            platformsOptions.map((platform) => {
                                                return(
                                                    <option   value={ platform }> { platform } </option>
                                                )
                                            })
                                        }
                                </select>
                                {errors.parent_platforms && <p className={styles.error}>{errors.parent_platforms}</p>}
                                <div className={styles.contenedor}>
                                {
                                    newGame.parent_platforms.map(( platform, i ) => {
                                        return(
                                            <div className={styles.genresOption} key={i}>
                                                { platform }
                                                <button className={styles.buttonDelete} type='button' value={ platform } onClick={ handlePlatformDelete }> X </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            </div>
            </div>
            <div>
                <label htmlFor="releaseDate">Release Date </label>
                <input type="date" name="releaseDate" onChange={handleChange} value={newGame.releaseDate}/>
                {errors.releaseDate && <p className={styles.error}>{errors.releaseDate}</p>}
            </div>
            <div>
                <label htmlFor="rating">Rating </label>
                <input
          type="range"
          name="rating"
          min={0}
          max={5}
          step={0.5}
          onChange={(e) => setRating(parseFloat(e.target.value))}
          value={rating}
        />
        <span>{rating}</span>
                {errors.rating && <p className={styles.error}>{errors.rating}</p>}
            </div>
            <div>
                <label htmlFor="genres">Genres </label>
                <select name="genres"  onChange={ handleGenreSelect }>
                    <option value=""> Select </option>
                    {genres.map((genre)=>{ 
                        return(<option value={genre.id} key={genre.id}>{genre.name}</option>)})}
                </select>
                {errors.genres && <p className={styles.error}>{errors.genres}</p>}
            </div>
            <div className={styles.contenedor}>
                {newGame.genres.map((genre) =>{
                    return(<div className={styles.genresOption} key={genre.id} value={ genre.id}>
                        {genre.name}
                <button className={styles.buttonDelete} onClick={() =>handleDeleteGenres(genre.id)} value={ genre.id}>X</button>
                </div>)})}
            </div>

            <div>
            <button type="submit" className={styles.submitButton}>Create Game</button>
            </div>
            
        </form>
    </div>
  )
}

export default CreateGame