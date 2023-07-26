import Cards from "../../components/Cards/Cards"
// import { useState } from "react";
// import Card from "../../components/Card/Card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '../../components/Pagination/Pagination'
import { getGames } from "../../redux/actions/actions";
import Loanding from "../../components/Loanding/Loading";
import AllFilters from "../../components/Filters/AllFilters";
import style from './home.module.css'


function Home() {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);
  console.log(allGames.parent_platforms);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const totalPages = Math.ceil(allGames?.length / gamesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentGames = allGames?.slice(
    (currentPage - 1) * gamesPerPage,
    currentPage * gamesPerPage
  );

  return (
    <div>
      {currentGames.length !== 0 
      ? <section>
       <div className={style.filterscontainer}>
        <AllFilters currentPage={ currentPage } setCurrentPage={ setCurrentPage }/>
        </div>

        <Cards games={currentGames} className={style.cardscontainer}/> 
      </section>
      : <Loanding/>}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Home