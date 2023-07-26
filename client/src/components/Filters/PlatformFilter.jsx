import {useDispatch} from 'react-redux';
import { filterPlatform } from '../../redux/actions/actions';

function PlatformFilter({setCurrentPage}) {
    const dispatch = useDispatch();

    const handleSelect = (event)=>{
        const value = event.target.value;
        setCurrentPage(1);
        dispatch(filterPlatform(value))
    }
  return (
    <form className="filter-container">
    <select className="filter-select" onChange={ handleSelect } defaultValue={'DEFAULT'}>
        <option className="Option-name" value="DEFAULT" disabled> Platform </option>
        <option className="Option-select" value="xbox"> Xbox </option>
        <option className="Option-select" value="android"> Android </option>
        <option className="Option-select" value="playstation"> Playstation </option>
        <option className="Option-select" value="pc"> Pc </option>
        <option className="Option-select" value="nintendo"> Nintendo </option>
    </select>
    
</form>
  )
}

export default PlatformFilter