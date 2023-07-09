import {  useState } from "react";
import {getSearch, clearSearch} from "../../redux/actions/actions"
 import { useDispatch } from "react-redux";
import {   useNavigate} from 'react-router-dom'


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
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Rocket league, etc.'
          type='text'
          name='search'
          onChange={handleChange}
          value={name}
        />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  );
}

export default SearchBar;