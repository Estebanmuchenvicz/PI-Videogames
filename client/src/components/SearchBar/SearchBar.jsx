import {  useState } from "react";
import {getSearch, clearSearch} from "../../redux/actions/actions"
 import { useDispatch } from "react-redux";
import {   useNavigate} from 'react-router-dom'
import style from './search.module.css'
import {AiOutlineSearch} from 'react-icons/ai'


function SearchBar() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      return; // Si está vacío, no se realiza ninguna acción
    }
    navigate(`/games/${name}`);
    dispatch(getSearch(name));
    dispatch(clearSearch())
  };

  const handleChange = (event) => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    const inputValue = event.target.value;
    if (regex.test(inputValue)) {
      setName(inputValue);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className={style.containerSerach}>
        <input
          className={style.SearchBar}
          placeholder="The Witcher, etc."
          type="text"
          name="search"
          onChange={handleChange}
          value={name}
        />
        <button type="submit" className={style.searchButton}><AiOutlineSearch/></button>
      </form>
    </div>
  );
}

export default SearchBar;