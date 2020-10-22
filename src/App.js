import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Equipment from './components/Equipment';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart0';
import imageArray from './components/imageData';
import ShopItemProps from './components/Barbell/ShopItemProps';
import './App.css';

const App = (props) => {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [itemCount, setItemCount] = useState(1);
  const [arrayOfItems, setArrayOfItems] = useState([
    {
      name: "IWF WEIGHTLIFTING COMPETITION BAR - 20 KG, MEN",
      price: 1110,
      count: 0,
      url: "/equipment/competition-bar-20kg-men-id-0",
    },
    {
      name: "IWF WEIGHTLIFTING COMPETITION BAR - 15 KG, WOMEN",
      price: 1110,
      count: 0,
      url: "/equipment/competition-bar-15kg-women-id-1",
    },
    {
      name: "IWF WEIGHTLIFTING TRAINING BAR - 20 KG, MEN",
      price: 915,
      count: 0,
      url: "/equipment/training-bar-20kg-men-id-2",
    },
    {
      name: "IWF WEIGHTLIFTING TRAINING BAR - 15 KG, WOMEN",
      price: 915,
      count: 0,
      url: "/equipment/training-bar-15kg-women-id-3",
    },
    {
      name: "WEIGHTLIFTING PERFORMANCE BAR - 20 KG, MEN",
      price: 776,
      count: 0,
      url: "/equipment/performance-bar-20kg-men-id-4",
    },
    {
      name: "WEIGHTLIFTING PERFORMANCE BAR - 15 KG, WOMEN",
      price: 776,
      count: 0,
      url: "/equipment/performance-bar-15kg-women-id-5",
    },
  ]);
  
  const [totalSumState, setTotalSumState] = useState(0);

  const calcTotalPrice = () => {
    let totalSum = 0;    
    arrayOfItems.forEach(element => {
      let objSum = 0;
      if (element.count > 0) {
        objSum = element.price * element.count;
      } 
      totalSum = totalSum + objSum;
    });
    return totalSum;
  }

  const decrementCount = (index) => {
    const handler = () => {
      const newObj = [...arrayOfItems];
      (newObj[index].count === 1) ? newObj[index].count = 1 : newObj[index].count--;
      setArrayOfItems(newObj);
      const temp = calcTotalPrice().toFixed(2);
      setTotalSumState(temp);
      (numberOfCartItems === 1) ? setNumberOfCartItems(1) : setNumberOfCartItems(numberOfCartItems - 1);
    }
    return handler;
  };

  const incrementCount = (index) => {
    const handler = () => {
      const newObj = [...arrayOfItems];
      newObj[index].count++;
      setArrayOfItems(newObj);
      const temp = calcTotalPrice().toFixed(2);
      setTotalSumState(temp);
      setNumberOfCartItems(numberOfCartItems + 1);
    }
    return handler;
  };

  const decrementAddItemToCartNum = () => (itemCount === 1) ? 1 : setItemCount(itemCount - 1);
  const incrementAddItemToCartNum = () => setItemCount(itemCount + 1);
  const handleChangeAddItemToCart = (e) => e.target.value;
  
  const addItemToCart = () => {
    setNumberOfCartItems(numberOfCartItems + itemCount);
    setItemCount(1);
    // Keep track of quantity of specific items added to cart
    arrayOfItems.forEach((item, index) =>  {
      const inputNum = document.querySelector('.input-field-number');
      // If the current URL in browser matches the URL value in the object
      if (window.location.href.includes(item.url)) {
        const newObj = [...arrayOfItems]
        newObj[index].count += parseInt(inputNum.value);
        setArrayOfItems(newObj);
        const temp = calcTotalPrice().toFixed(2);
        setTotalSumState(temp);
        // console.table(newObj);
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

        <Route
          exact path="/cart"
          render={(props) => (<ShoppingCart 
            image={imageArray}
            numberOfCartItems={numberOfCartItems}
            array={arrayOfItems}
            // removeItemFromCart={removeItemFromCart}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
            totalSumState={totalSumState}
          />)}
        />
                
        <Route
          exact path={arrayOfItems[0].url}
          render={(props) => (<ShopItemProps 
            image={imageArray[0]}
            itemName={arrayOfItems[0].name}
            itemPrice="$1,100.00 USD"
            itemCount={itemCount}
            decrementClick={decrementAddItemToCartNum}
            incrementClick={incrementAddItemToCartNum}
            handleChange={handleChangeAddItemToCart}
            handleSubmit={addItemToCart}
          />)}
        />

        <Route
          exact path={arrayOfItems[1].url}
          render={(props) => (<ShopItemProps 
            image={imageArray[1]}
            itemName={arrayOfItems[1].name}
            itemPrice="$1,100.00 USD"
            itemCount={itemCount}
            decrementClick={decrementAddItemToCartNum}
            incrementClick={incrementAddItemToCartNum}
            handleChange={handleChangeAddItemToCart}
            handleSubmit={addItemToCart}
          />)}
        />

        <Route
          exact path={arrayOfItems[2].url}
          render={(props) => (<ShopItemProps 
            image={imageArray[2]}
            itemName={arrayOfItems[2].name}
            itemPrice="$915.00 USD"
            itemCount={itemCount}
            decrementClick={decrementAddItemToCartNum}
            incrementClick={incrementAddItemToCartNum}
            handleChange={handleChangeAddItemToCart}
            handleSubmit={addItemToCart}
          />)}
        />

        <Route
          exact path={arrayOfItems[3].url}
          render={(props) => (<ShopItemProps 
            image={imageArray[3]}
            itemName={arrayOfItems[3].name}
            itemPrice="$915.00 USD"
            itemCount={itemCount}
            decrementClick={decrementAddItemToCartNum}
            incrementClick={incrementAddItemToCartNum}
            handleChange={handleChangeAddItemToCart}
            handleSubmit={addItemToCart}
          />)}
        />

        <Route
          exact path={arrayOfItems[4].url}
          render={(props) => (<ShopItemProps 
            image={imageArray[4]}
            itemName={arrayOfItems[4].name}
            itemPrice="$776.00 USD"
            itemCount={itemCount}
            decrementClick={decrementAddItemToCartNum}
            incrementClick={incrementAddItemToCartNum}
            handleChange={handleChangeAddItemToCart}
            handleSubmit={addItemToCart}
          />)}
        />

        <Route
          exact path={arrayOfItems[5].url}
          render={(props) => (<ShopItemProps 
            image={imageArray[5]}
            itemName={arrayOfItems[5].name}
            itemPrice="$776.00 USD"
            itemCount={itemCount}
            decrementClick={decrementAddItemToCartNum}
            incrementClick={incrementAddItemToCartNum}
            handleChange={handleChangeAddItemToCart}
            handleSubmit={addItemToCart}
          />)}
        />
      </Switch>
    </div>
  );
}

export default App;