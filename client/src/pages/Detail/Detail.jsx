import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getDetails, clearDetails } from "../../redux/actions/actions";
import style from "./detail.module.css";
import Loading from "../../components/Loanding/Loading";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Detail() {
  //extrayendo el id de la url
  const { id } = useParams();
  const dispacht = useDispatch();
  const detail = useSelector((state) => state.gameDetails);
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    dispacht(getDetails(id))
      .then(() => {
        if (isMounted) {
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
      dispacht(clearDetails());
    };
  }, [dispacht, id]);

  //Logica separar plataforms
  const platforms = (platforms) => {
    if (platforms) return platforms.join(" - ");
  };
  //Logica separar genres
  const genres = (genres) => {
    if (genres)
      return Object.values(genres.map((genre) => genre.name).join(" - "));
  };

  //Logica de lonanding
  if (loading) {
    return <Loading />;
  }

  //ESTRELLAS DE RATING

  const generateStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const decimal = rating % 1;
    
    let halfStar = false;
  
    // Comprobamos si la parte decimal está entre 0.25 y 0.75 para mostrar la estrella a la mitad
    if (decimal >= 0.25 && decimal <= 0.75) {
      halfStar = true;
    }

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
    <div className={style.containeDetail}>
      <div className={style.container}>
        <div className={style.image}>
          <div className={style.img}>
            <img src={detail?.image} alt={detail?.name} />
          </div>
          <div className={style.title}>
            <h1>{detail?.name}</h1>
          </div>
          <section className={style.dates}>
            <div className={style.date}>
              <h3>Release Date:</h3>
              <h2>{detail?.releaseDate}</h2>
            </div>
            <div className={style.rating}>
              <h3> Raiting: </h3>
              <div className={style.stars}>
              {generateStars(detail?.rating)}
              </div>
            </div>
               
          </section>
        </div>
        <h2 className={style.about}>About: </h2>
        <div
          className={style.description}
          dangerouslySetInnerHTML={{ __html: detail?.description }}
        />
        <div className={style.details}>
          <div className={style.platforms}>
            <h3>Platforms: </h3>
            <h2 className={style.platforms}>
              {platforms(detail?.parent_platforms)}
            </h2>
          </div>
          <div className={style.genres}>
            <h3>Genres: </h3>
            <h2 className={style.genres}>{genres(detail?.genres)}</h2>
          </div>
        </div>
      </div>

      <div>
        <NavLink to="/home">
          <button className={style.btn}>GoTo Home</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Detail;
