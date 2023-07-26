import { useDispatch } from "react-redux";
import { filterRating } from "../../redux/actions/actions";

function RatingFilter({setCurrentPage}) {
    const dispatch = useDispatch();

    const handleSelect = (event) =>{
        const value = event.target.value;
        setCurrentPage(1);
        dispatch(filterRating(value))
    }
  return (
    <form className="filter-container">
        <select className="filter-select" defaultValue={'DEFAULT'} onChange={handleSelect}>
            <option className="Option-name" value="DEFAULT" disabled>Rating</option>
            <option className="Option-select" value="ratingAsc">Menor</option>
            <option className="Option-select"value="ratingDesc">Mayor</option>
        </select>
        
    </form>
  )
}

export default RatingFilter