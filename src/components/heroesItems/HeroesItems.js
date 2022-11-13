import './heroesItems.scss';
import test from '../../image/test.png';
const HeroesItems = ({name, descr}) =>{

  return (
    <div className="heroeslist__item">
      <div className="heroeslist__imgwrap">
        <img src={test} alt="test" />
      </div>

    <div className="heroeslist__descr">
      <div className="heroeslist__name">{name}</div>
       <div className="heroeslist__herodescr">{descr}</div>
    </div>

    <span className="heroeslist__delete">x</span>
  </div>
  )
}

export default HeroesItems;