import {useEffect} from 'react'
import { getGenres, filterGenre } from '../../redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux'

function GenresFilter({setCurrentPage}) {
    const dispatch = useDispatch()
    const genres = useSelector((state)=>state.genresFilter)
    useEffect(() => {
        dispatch(getGenres())
    },[dispatch])

    const handleSelect = (event)=>{
        const value = event.target.value;
        setCurrentPage('1') // reset page number to 1 when genre is selected
        dispatch(filterGenre(value))
    }
  return (
    <form className="filter-container">
        <select className="filter-select" defaultValue={'DEFAULT'} onChange={handleSelect}>
            <option className="Option-name" value="DEFAULT" disabled>Genres</option>
            {genres.map((genre)=>
               {return (<option className="Option-select" value={genre.name} key={genre.id}>{genre.name}</option>)})}
        </select>
    </form>
  )
}

export default GenresFilter