import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Equipment from './components/Equipment';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart';
import imageArray from './components/imageData';
import ShopItemProps from './components/Barbell/ShopItemProps';
import './App.css';

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
    // Keep track of quantity of specific items added to cart
    arrayOfItems.forEach((item, index) =>  {
      // If the current URL in browser matches the URL value in the object, then perform the code below
      if (window.location.href.includes(item.url)) {
        console.log(`The current URL matches the object item URL: ${item.url}`);
        const newObj = [...arrayOfItems]
        newObj[index].count++;
        setArrayOfItems(newObj);
        console.table(newObj);
      }
    });
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
          exact path={arrayOfItems[0].url}
          render={(props) => (<ShopItemProps 
            image={imageArray[0]}
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
            image={imageArray[1]}
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
            image={imageArray[2]}
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
            image={imageArray[3]}
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
            image={imageArray[4]}
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
            image={imageArray[5]}
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