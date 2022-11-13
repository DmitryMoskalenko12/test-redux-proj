import './heroesList.scss';
import HeroesItems from '../heroesItems/HeroesItems';
import useHttp from '../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { heroesFetching, heroesFetched, heroesFetchingError, heroesDeleted } from '../actions/actions';

const HeroesList = () =>{
const {request} = useHttp();

const heroesData = useSelector(state => state.heroes.heroes);
const dispatch = useDispatch();

useEffect(() =>{
  dispatch(heroesFetching());
  request('http://localhost:3001/heroes')
  .then((heroes) => dispatch(heroesFetched(heroes)))
  .catch(() => dispatch(heroesFetchingError())
  )
},[])

const onDelete = (id) =>{
  request(`http://localhost:3001/heroes/${id}`,'DELETE')
  .then(() => dispatch(heroesDeleted(id)))
  .catch(() => dispatch(heroesFetchingError()))

}
  return(
      <div className="heroeslist">
       {
       heroesData.map(({name, element, description, id})=>{
       return <HeroesItems del = {() => onDelete(id)} key={id} name = {name} element = {element} descr = {description}/>
       })
       }
      </div>
  )
}
export default HeroesList;