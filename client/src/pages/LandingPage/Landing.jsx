import style from './landing.module.css';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className={style.container}>
        <h2 className={style.welcome}>Welcome to</h2>
        <h1 className={style.title}>Henrry Games</h1>
        <div>
        <Link to={'/home'}> 
                    <button className={style.btnStart} > START </button>
                </Link>
        </div>
    </div>
  )
}

export default Landing