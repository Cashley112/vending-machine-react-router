import React, { Component } from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numBagsEaten: 0 };
    this.incBagsEaten = this.incBagsEaten.bind(this);
  }
  incBagsEaten() {
      this.setState(st => ({
          numBagsEaten: st.numBagsEaten += 1
      }))
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path ='/' component={VendingMachine} />
          <Route exact path ='/soda' component={Soda} />
          <Route 
            exact path ='/chips' 
            render={() => <Chips 
              handleClick={this.incBagsEaten} 
              bagsEaten={this.state.numBagsEaten} 
              />} 
          />
          <Route exact path ='/sardines' component={Sardines} />
        </Switch>
      </div>
    );
  }
}

export default App;
