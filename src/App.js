import React from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Equipment from './components/Equipment';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart';

import './App.css';
import Barbell0 from './components/Barbell/Barbell0';
import Barbell1 from './components/Barbell/Barbell1';
import Barbell2 from './components/Barbell/Barbell2';
import Barbell3 from './components/Barbell/Barbell3';
import Barbell4 from './components/Barbell/Barbell4';
import Barbell5 from './components/Barbell/Barbell5';

const App = (props) => {
  return (
    <div className="App">
      <Navbar />  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/equipment" component={Equipment} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/equipment/competition-bar-20kg-men" component={Barbell0} />
        <Route exact path="/equipment/competition-bar-15kg-women" component={Barbell1} />
        <Route exact path="/equipment/training-bar-20kg-men" component={Barbell2} />
        <Route exact path="/equipment/training-bar-15kg-women" component={Barbell3} />
        <Route exact path="/equipment/performance-bar-20kg-men" component={Barbell4} />
        <Route exact path="/equipment/performance-bar-15kg-women" component={Barbell5} />
      </Switch>
    </div>
  );
}

export default App;