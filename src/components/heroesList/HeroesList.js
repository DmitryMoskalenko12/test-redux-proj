import './heroesList';
import './heroesList.scss';
import HeroesItems from '../heroesItems/HeroesItems';
import useHttp from '../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { heroesFetching, heroesFetched, heroesFetchingError } from '../actions/actions';

const HeroesList = () =>{
const {request} = useHttp();

const heroesData = useSelector(state => state.heroes);
const dispatch = useDispatch();

useEffect(() =>{
  dispatch(heroesFetching());
  request('http://localhost:3001/heroes')
  .then((heroes) => dispatch(heroesFetched(heroes)))
  .catch(() => dispatch(heroesFetchingError())
  )
},[])

  return(
      <div className="heroeslist">
       {
       heroesData.map(({name, element, description, id})=>{
       return <HeroesItems key={id} name = {name} element = {element} descr = {description}/>
       })
       }
      </div>
  )
}
export default HeroesList;