import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css"


function NavBar() {
  return (
    <div className={style.nav}>
        <h1>Games Henry</h1>
        <SearchBar/>
        <h2>ADD GAME</h2>
    </div>
  )
}

export default NavBar;