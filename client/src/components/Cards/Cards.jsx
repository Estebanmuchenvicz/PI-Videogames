//  import { useDispatch, useSelector } from 'react-redux';
//  import { getGames } from '../../redux/actions/actions';
// import { useEffect } from 'react'
import Card from '../Card/Card';
import style from './cards.module.css'


function Cards({ games,}) {

  return (
    <div className={style.cardsContainer}>
      {games?.map((game) => (
        <Card
          key={game.id}
          id={game.id}
          name={game.name}
          image={game.image}
          rating={game.rating}
          parent_platforms={game.parent_platforms}
          genres={game.genres}
          create={game.created}
        />
      ))}
    </div>
  );
}

export default Cards