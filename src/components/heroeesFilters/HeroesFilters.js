import './heroesFilters.scss';
import useHttp from '../../hooks/http.hook';
import { useEffect } from 'react';
import { filtersFetching, filtersFetched, filtersFetchingError, activeFilter } from './filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

const HeroesFilters = () =>{
const {request} = useHttp();
const filters = useSelector(state => state.filters.filters);
const dispatch = useDispatch();

useEffect(() => {
 dispatch(filtersFetching());
 request('http://localhost:3001/filters')
 .then((res) => dispatch(filtersFetched(res)))
 .catch(() => dispatch(filtersFetchingError()))
},[])

  return(
  <div className='filters'>
    <div className="filters__wrap">
      <div className="filters__title">Отфильтруйте героев по элементам</div>
      <div className="filters__butwrap">
        {
          filters.map(({id, filter, lable}) => {
            return <button key={id} onClick = {() => dispatch(activeFilter(filter))} className={`filters__but ${filter}`}>{lable}</button> 
          })
        }
      </div>
    </div>
  </div>
  )
}
export default HeroesFilters;