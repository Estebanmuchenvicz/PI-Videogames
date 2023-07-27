import { NavLink } from "react-router-dom";
import style from './error404.module.css';

const Error404 = () => {
  return (
    <div className={style.errorContainer}>
      <div className={style.errorContent}>
        <h1>¡Error 404!</h1>
        <p>Ups, parece que este nivel no existe...</p>
        <p>¿Te gustaría volver a la página de inicio?</p>
        <NavLink to="/home">
          <button className={style.btn}>GoTo Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
