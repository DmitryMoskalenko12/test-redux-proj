import './App.css';
import store from '../../store/store';
import { Provider } from 'react-redux';
import HeroesList from '../heroesList/HeroesList';
import './app';

function App() {
  return (
    <Provider store = {store}>
     <div className="App">
       <HeroesList/>
     </div>
    </Provider>
  );
}

export default App;
