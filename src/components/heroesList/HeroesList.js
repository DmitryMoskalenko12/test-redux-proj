import './heroesList.scss';
import HeroesItems from '../heroesItems/HeroesItems';
import useHttp from '../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {heroesFetch, heroesDeleted } from './heroesSlice';
import { result } from './heroesSlice';

const HeroesList = () =>{
const {request} = useHttp();

const loadingRes = useSelector(state => state.heroes.fetching);
const heroesData = useSelector(result);
const dispatch = useDispatch();

useEffect(() =>{
  dispatch(heroesFetch())
},[])

const onDelete = (id) =>{
  request(`http://localhost:3001/heroes/${id}`,'DELETE')
  .then(() => dispatch(heroesDeleted(id)))
  .catch((err) => console.log(err))

}

if (loadingRes === 'loading') {
  return <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading</div>
}
if (loadingRes === 'error') {
  return <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Error</div>
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