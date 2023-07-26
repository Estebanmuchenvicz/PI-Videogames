import OriginFilter from "./OriginFilter";
import GenresFilter from "./GenresFilter";
import OrderFilter from "./OrderFilter";
import RatingFilter from "./RatingFilter";
import PlatformFilter from "./PlatformFilter";
import './Css/Filter.css'

function AllFilters({ setCurrentPage }) {
  return (
    <div id="Filtro" className="filter-container">
        <div >
            <PlatformFilter setCurrentPage={setCurrentPage}/>
        </div>
        <div >
            <RatingFilter setCurrentPage={setCurrentPage}/>
        </div>
         <div >
            <OrderFilter setCurrentPage={setCurrentPage}/>
        </div>
        <div className="CreatedFilter">
            <OriginFilter setCurrentPage={setCurrentPage}/>
        </div>
        <div >
            <GenresFilter setCurrentPage={setCurrentPage}/>
        </div>
    </div>
  )
};

export default AllFilters;