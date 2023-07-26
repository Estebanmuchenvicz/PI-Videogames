import { NavLink } from "react-router-dom";
import style from "./card.module.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


function card({id, name, image,genres, rating}) {
  if (!genres) {
    return "sin genre"; // o realizar alguna acción alternativa
  }

  const generateStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const starsArray = [];

  // Estrellas completas
  for (let i = 0; i < fullStars; i++) {
    starsArray.push(<FaStar key={i} className={style.starFilled} />);
  }

  // Media estrella
  if (halfStar) {
    starsArray.push(<FaStarHalfAlt key="half" className={style.starHalf} />);
  }

  // Estrellas vacías
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsArray.push(<FaRegStar key={`empty-${i}`} className={style.starEmpty} />);
  }

  return starsArray;
  };
  return (
    <div className={style.cardContainer}>
        <NavLink to={`/detail/${id}`} className={style.NavLink}>
            <div className={style.imgCard}>
            <img src={image} alt={name } />
            </div>
            <div className={style.rating}>
              <h4> Raiting: </h4>
              <div className={style.stars}>
              {generateStars(rating)}
              </div>
            </div>
            <div className={style.description}>
            <h3>{name}</h3>
            <p>Genres: {genres.map(genre => genre.name).join(' - ')}</p>
            </div>
        </NavLink>
    </div>
  )
}

export default card