import { useSelector} from "react-redux";
import {  useState} from "react";
import Pagination from '../../components/Pagination/Pagination';
import Loanding from "../../components/Loanding/Loading";
import Cards from "../../components/Cards/Cards";
import { useParams } from "react-router-dom";
// import {getSearch, clearSearch } from "../../redux/actions/actions"



function SerarchResults() {
  const {name} = useParams();
  
   let games = useSelector((state) => state.searchGames);

    console.log(games)
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 15;

  
    const totalPages = Math.ceil((games?.length || 0) / gamesPerPage);

  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const currentGames = games?.slice(
      (currentPage - 1) * gamesPerPage,
      currentPage * gamesPerPage
    );


  return (
    <div>
        <h1 className='results' > Results with {name}! </h1>
        {games.length === 0 ? (<Loanding />):(<Cards games={currentGames} /> )}
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default SerarchResults