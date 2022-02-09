import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonDetail from './PokemonDetail';
import PokemonsPage from './PokemonsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <PokemonsPage />
        </Route>
        <Route>
          <PokemonDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
