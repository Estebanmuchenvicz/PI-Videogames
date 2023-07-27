import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <div className={style.nav}>
      <Link to='/home' className={style.link}>
      <h1 className={style.logo}>Games Henry</h1>
      </Link>
        <SearchBar/>
        <Link to='/creategame'>
        <button className={style.btnCreate}>➕ ADD GAME</button>
        </Link>
    </div>
  )
}

export default NavBar;