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
  const [arrayOfItems, setArrayOfItems] = useState([
    {
      price: 1110,
      count: 0,
      url: "/equipment/competition-bar-20kg-men-id-0",
    },
    {
      price: 1110,
      count: 0,
      url: "/equipment/competition-bar-15kg-women-id-1",
    },
    {
      price: 915,
      count: 0,
      url: "/equipment/training-bar-20kg-men-id-2",
    },
    {
      price: 915,
      count: 0,
      url: "/equipment/training-bar-15kg-women-id-3",
    },
    {
      price: 776,
      count: 0,
      url: "/equipment/performance-bar-20kg-men-id-4",
    },
    {
      price: 776,
      count: 0,
      url: "/equipment/performance-bar-15kg-women-id-5",
    },
  ]);

  const decrementItemCount = () => (itemCount === 1) ? 1 : setItemCount(itemCount - 1);
  const incrementItemCount = () => setItemCount(itemCount + 1);
  const handleChange = (e) => e.target.value;
  const handleSubmit = (e) => {
    setNumberOfCartItems(numberOfCartItems + itemCount);
    setItemCount(1);
    arrayOfItems.forEach((item, index) =>  {
      if (window.location.href.includes(item.url)) {
        console.log(`The current URL matches the object item URL: ${item.url}`);
        const newObj = [...arrayOfItems]
        newObj[index].count++;
        setArrayOfItems(newObj);
        console.table(newObj);
      }
    });
  };

  // let currentURL = window.location.href;
  // if (currentURL.includes(arrayOfItems.item1.url)) {
  //   console.log(`The URL matches the ${arrayOfItems.item1.url}`);
  // } else if (currentURL.includes(arrayOfItems.item2.url)) {
  //   console.log(`The URL matches the ${arrayOfItems.item2.url}`);
  // } else if (currentURL.includes(arrayOfItems.item3.url)) {
  //   console.log(`The URL matches the ${arrayOfItems.item3.url}`);
  // } else if (currentURL.includes(arrayOfItems.item4.url)) {
  //   console.log(`The URL matches the ${arrayOfItems.item4.url}`);
  // } else if (currentURL.includes(arrayOfItems.item5.url)) {
  //   console.log(`The URL matches the ${arrayOfItems.item5.url}`);
  // } else if (currentURL.includes(arrayOfItems.item6.url)) {
  //   console.log(`The URL matches the ${arrayOfItems.item6.url}`);
  // }

  // const expr = window.location.href;
  // switch (expr) {
  //   case arrayOfItems.item1.url: 
  //     console.log("The URL matches the given URL!");
  //     break;
  //   default:
  //     console.log("No expressions!");
  // }

  // const objInfo = {
  //   barID0: "id-0",
  //   barID1: "id-1",
  //   barID2: "id-2",
  //   barID3: "id-3",
  //   barID4: "id-4",
  //   barID5: "id-5",
  // }

  return (
    <div className="App">
      <Navbar cartItemCount={numberOfCartItems} />  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/equipment" component={Equipment} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={ShoppingCart} />
                
        <Route
          exact path={arrayOfItems[0].url}
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
          exact path={arrayOfItems[1].url}
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
          exact path={arrayOfItems[2].url}
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
          exact path={arrayOfItems[3].url}
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
          exact path={arrayOfItems[4].url}
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
          exact path={arrayOfItems[5].url}
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