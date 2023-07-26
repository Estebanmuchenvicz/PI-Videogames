import { useDispatch } from "react-redux";
import { filterCreated } from "../../redux/actions/actions";
import './Css/Filter.css'

function OriginFilter({setCurrentPage}) {
    const dispatch = useDispatch();

    const handleChange = (event)=>{
        const value = event.target.value;
        setCurrentPage(1); // reset page to 1 when filtering by origin or created date
        dispatch(filterCreated(value));
    }

  return (
    <form className="filter-container">
        <select className="filter-select" defaultValue={'DEFAULT'} onChange={handleChange}>
            <option className="Option-name" value="DEFAULT" disabled>Origen</option>
            <option className="Option-select" value="Api">API</option>
            <option className="Option-select" value="created">Database</option>
        </select>
        
    </form>
  )
}

export default OriginFilter