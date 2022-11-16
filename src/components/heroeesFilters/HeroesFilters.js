import './heroesFilters.scss';
import { useEffect } from 'react';
import { filtersFetch, activeFilter } from './filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll } from './filtersSlice';

const HeroesFilters = () =>{
const filters = useSelector(state => selectAll(state));
const dispatch = useDispatch();

useEffect(() => {
  dispatch(filtersFetch());
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