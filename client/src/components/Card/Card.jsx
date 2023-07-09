import { NavLink } from "react-router-dom";
import style from "./card.module.css"


function card({id, name, image,genres}) {
  return (
    <div className={style.cardContainer}>
        <NavLink to={`/detail/${id}`} className={style.NavLink}>
            <div className={style.imgCard}>
            <img src={image} alt={name } />
            </div>
            {/* <div>
            <button value={Math.round(rating)} className={style.rating}> { rating } </button>
            </div> */}
            <div className={style.description}>
            <h3>{name}</h3>
            <p>Genres: {genres.map(genre => genre.name).join(' - ')}</p>
            </div>
        </NavLink>
    </div>
  )
}

export default card