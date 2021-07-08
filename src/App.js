import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact activeClassName='active-link' to="/">VendingMachine</NavLink>
        <NavLink exact activeClassName='active-link' to="/soda">Soda</NavLink>
        <NavLink exact activeClassName='active-link' to="/chips">Chips</NavLink>
        <NavLink exact activeClassName='active-link' to="/sardines">Sardines</NavLink>
      </nav>
      <Switch>
        <Route exact path ='/' component={VendingMachine} />
        <Route exact path ='/soda' component={Soda} />
        <Route exact path ='/chips' component={Chips} />
        <Route exact path ='/sardines' component={Sardines} />
      </Switch>
    </div>
  );
}

export default App;
