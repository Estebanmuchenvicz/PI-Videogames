import {  useState } from "react";
import {getSearch, clearSearch} from "../../redux/actions/actions"
 import { useDispatch } from "react-redux";
import {   useNavigate} from 'react-router-dom'
import style from './search.module.css'


function SearchBar() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/games/${name}`);
    dispatch(getSearch(name));
    dispatch(clearSearch())
  };

  const handleChange = (event) => {
    const regex = /^[a-zA-Z0-9]*$/;
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
        <button type="submit" className={style.searchButton}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;