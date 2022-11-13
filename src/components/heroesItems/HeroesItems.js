import test from '../../image/test.png';

const HeroesItems = ({name, element, descr, del}) =>{
let backgrStyle;

switch (element) {
  case 'fire':
     backgrStyle = 'heroeslist_fire'
     break
  case 'water':
     backgrStyle = 'heroeslist_water'
     break
  case 'wind':
     backgrStyle = 'heroeslist_wind' 
     break   
  case 'earth':
     backgrStyle = 'heroeslist_earth'
     break
  default:
    break;
}
  return (
    <div className={ `heroeslist__item ${backgrStyle}`}>
      <div className="heroeslist__imgwrap">
        <img src={test} alt="test" />
      </div>

    <div className="heroeslist__descr">
      <div className="heroeslist__name">{name}</div>
       <div className="heroeslist__herodescr">{descr}</div>
    </div>

    <span onClick={del} className="heroeslist__delete">&times;</span>
  </div>
  )
}

export default HeroesItems;