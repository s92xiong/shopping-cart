import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Equipment from './components/Equipment';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart';

import './App.css';
import ShopItemProps from './components/Barbell/ShopItemProps';

import competitionBar20kg from './images/eleiko-iwf-weightlifting-competition-bar.jpg';
import competitionBar15kg from './images/eleiko-iwf-weightlifting-competition-bar-women.jpg';
import trainingBar20kg from './images/eleiko-iwf-weightlifting-training-bar.jpg';
import trainingBar15kg from './images/eleiko-iwf-weightlifting-training-bar-women.jpg';
import performanceBar20kg from './images/eleiko-performance-weightlifting-bar.jpg';
import performanceBar15kg from './images/eleiko-performance-weightlifting-bar-women.jpg';

const App = (props) => {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [itemCount, setItemCount] = useState(1);
  // const [totalPrice, setTotalPrice] = useState(0);
 
  const decrementItemCount = () => (itemCount === 1) ? 1 : setItemCount(itemCount - 1);
  const incrementItemCount = () => setItemCount(itemCount + 1);
  const handleChange = (e) => e.target.value;
  const handleSubmit = (e) => {
    setNumberOfCartItems(numberOfCartItems + itemCount);
    setItemCount(1);
  };

  return (
    <div className="App">
      <Navbar cartItemCount={numberOfCartItems} />  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/equipment" component={Equipment} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={ShoppingCart} />
                
        <Route
          exact path="/equipment/competition-bar-20kg-men"
          render={(props) => (<ShopItemProps 
            image={competitionBar20kg}
            itemName="IWF WEIGHTLIFTING COMPETITION BAR - 20 KG, MEN"
            itemPrice="$1,100.00 USD"
            itemCount={itemCount}
            decrementClick={decrementItemCount}
            incrementClick={incrementItemCount}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />)}
        />

        <Route
          exact path="/equipment/competition-bar-15kg-women"
          render={(props) => (<ShopItemProps 
            image={competitionBar15kg}
            itemName="IWF WEIGHTLIFTING COMPETITION BAR - 15 KG, WOMEN"
            itemPrice="$1,100.00 USD"
            itemCount={itemCount}
            decrementClick={decrementItemCount}
            incrementClick={incrementItemCount}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />)}
        />

        <Route
          exact path="/equipment/training-bar-20kg-men"
          render={(props) => (<ShopItemProps 
            image={trainingBar20kg}
            itemName="IWF WEIGHTLIFTING TRAINING BAR - 20 KG, MEN"
            itemPrice="$1,100.00 USD"
            itemCount={itemCount}
            decrementClick={decrementItemCount}
            incrementClick={incrementItemCount}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />)}
        />

        <Route
          exact path="/equipment/training-bar-15kg-women"
          render={(props) => (<ShopItemProps 
            image={trainingBar15kg}
            itemName="IWF WEIGHTLIFTING TRAINING BAR - 15 KG, WOMEN"
            itemPrice="$915.00 USD"
            itemCount={itemCount}
            decrementClick={decrementItemCount}
            incrementClick={incrementItemCount}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />)}
        />

        <Route
          exact path="/equipment/performance-bar-20kg-men"
          render={(props) => (<ShopItemProps 
            image={performanceBar20kg}
            itemName="WEIGHTLIFTING PERFORMANCE BAR - 20 KG, MEN"
            itemPrice="$776.00 USD"
            itemCount={itemCount}
            decrementClick={decrementItemCount}
            incrementClick={incrementItemCount}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />)}
        />

        <Route
          exact path="/equipment/performance-bar-15kg-women"
          render={(props) => (<ShopItemProps 
            image={performanceBar15kg}
            itemName="WEIGHTLIFTING PERFORMANCE BAR - 15 KG, WOMEN"
            itemPrice="$776.00 USD"
            itemCount={itemCount}
            decrementClick={decrementItemCount}
            incrementClick={incrementItemCount}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />)}
        />
      </Switch>
    </div>
  );
}

export default App;