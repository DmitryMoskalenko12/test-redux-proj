import './heroesForm.scss';
import { useState } from 'react';
import useHttp from '../../hooks/http.hook';
import { heroCreated, heroesFetching, heroesFetchingError } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const HeroesForm = () =>{

const [name, setName] = useState('');
const [descr, setDescr] = useState('');
const [element, setElement] = useState('');
const {request} = useHttp();

/* const filters = useSelector() */
const dispatch = useDispatch();

const onCreate = (e) =>{
  e.preventDefault();
  const newItem = {
    name,
    descr,
    element,
    id: Date.now()
  }

 dispatch(heroesFetching())
request('http://localhost:3001/heroes', 'POST', JSON.stringify(newItem))
.then((res) => {
  dispatch(heroCreated(res));
  setName('')
  setDescr('')
  setElement('')
})
.catch(() => dispatch(heroesFetchingError()))

}

  return(
    <form onSubmit={(e) => onCreate(e)} className="form">
      <div className="form__nameinp">
        <div className="form__name">Имя нового героя</div>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form__inp" />
      </div>

      <div className="form__textarea">
        <div className="form__descr">Описание</div>
        <textarea value={descr} onChange={(e) => setDescr(e.target.value)} className="form__area" name="test"></textarea>
      </div>

      <div className="form__select">
        <div className="form__choise">Выбрать элемент героя</div>
        <select value={element} onChange={(e) => setElement(e.target.value)} name="select" className="form__list">
          <option value="all">Я владею элементом</option>
          <option value="fire">Огонь</option>
          <option value="wind">Ветер</option>
          <option value="water">Вода</option>
          <option value="earth">Земля</option>
        </select>
      </div>
      <button className="form__create">Создать</button>
    </form>
  )
}
export default HeroesForm;