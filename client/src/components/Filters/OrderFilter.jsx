import {useDispatch} from 'react-redux'
import { filterOrder} from '../../redux/actions/actions';


function OrderFilter({setCurrentPage}) {
    const dispatch = useDispatch();

    const handleSelect = (event)=>{
        const value = event.target.value;
        setCurrentPage(1); // reset page to 1 when filters are applied
        dispatch(filterOrder(value))
    }
  return (
    <form className="filter-container">
        <select className="filter-select" defaultValue={'DEFAULT'} onChange={handleSelect}>
            <option className="Option-name" value="DEFAULT" disabled>Name</option>
            <option className="Option-select" value='ASC'>Ascending</option>
            <option className="Option-select" value='DESC'>Descending</option>
        </select>
        
    </form>
  )
}

export default OrderFilter