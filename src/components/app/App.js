import './app.scss';
import store from '../../store/store';
import { Provider } from 'react-redux';
import HeroesList from '../heroesList/HeroesList';
import HeroesForm from '../heroesForm/HeroesForm';

function App() {
  return (
    <Provider store = {store}>
     <div className="App">
      <div className="content">
      <HeroesList/>
      <div className="interactive__content">
        <HeroesForm/>
      </div>
      </div>
     </div>
    </Provider>
  );
}

export default App;
