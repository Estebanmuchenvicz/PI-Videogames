import { useSelector} from "react-redux";
import {  useState} from "react";
import Pagination from '../../components/Pagination/Pagination';
import Loanding from "../../components/Loanding/Loading";
import Cards from "../../components/Cards/Cards";
import { useParams } from "react-router-dom";
import style from './result.module.css'
// import {getSearch, clearSearch } from "../../redux/actions/actions"



function SerarchResults() {
  const {name} = useParams();
  
   let games = useSelector((state) => state.searchGames);
   const error = useSelector((state) => state.error);
   console.log(error);

    console.log(games)
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 15;

  
    const totalPages = Math.ceil((games?.length || 0) / gamesPerPage);

  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const currentGames = Array.isArray(games) ? games.slice(
      (currentPage - 1) * gamesPerPage,
      currentPage * gamesPerPage
    ):[];




  return (
    <div>
        <h2 className={style.results} > Results with {name}! </h2>
        {error ? (
        <div>
          <h1>{error}</h1>
        </div>
      ) : (
        <section>
          {games.length === 0 ? (
            <Loanding />
          ) : (
            <>
              <Cards games={currentGames} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </section>
      )}

    </div>
  )
}

export default SerarchResults