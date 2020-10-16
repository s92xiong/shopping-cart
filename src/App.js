import React from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Equipment from './components/Equipment';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Navbar />  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/equipment" component={Equipment} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={ShoppingCart} />
      </Switch>
    </div>
  );
}

export default App;