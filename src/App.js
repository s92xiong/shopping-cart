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

const App = () => {
  const [itemCount, setItemCount] = useState(1);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [arrayOfItems, setArrayOfItems] = useState([
    {
      name: "IWF WEIGHTLIFTING COMPETITION BAR - 20 KG, MEN",
      price: 1110,
      count: 0,
      url: "/equipment/0",
    },
    {
      name: "IWF WEIGHTLIFTING COMPETITION BAR - 15 KG, WOMEN",
      price: 1110,
      count: 0,
      url: "/equipment/1",
    },
    {
      name: "IWF WEIGHTLIFTING TRAINING BAR - 20 KG, MEN",
      price: 915,
      count: 0,
      url: "/equipment/2",
    },
    {
      name: "IWF WEIGHTLIFTING TRAINING BAR - 15 KG, WOMEN",
      price: 915,
      count: 0,
      url: "/equipment/3",
    },
    {
      name: "WEIGHTLIFTING PERFORMANCE BAR - 20 KG, MEN",
      price: 776,
      count: 0,
      url: "/equipment/4",
    },
    {
      name: "WEIGHTLIFTING PERFORMANCE BAR - 15 KG, WOMEN",
      price: 776,
      count: 0,
      url: "/equipment/5",
    },
  ]);

  const calcTotalCartItems = () => {
    const newArray = [...arrayOfItems];
    let total = 0;
    newArray.forEach(element => {
      if (element.count > 0) {
        total += element.count;
      } 
    });
    return total;
  }

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
      setTotalPrice(temp);
      const tempNumber = calcTotalCartItems();
      setNumberOfCartItems(tempNumber);
    }
    return handler;
  };

  const incrementCount = (index) => {
    const handler = () => {
      const newObj = [...arrayOfItems];
      newObj[index].count++;
      setArrayOfItems(newObj);
      const temp = calcTotalPrice().toFixed(2);
      setTotalPrice(temp);
      const tempNumber = calcTotalCartItems();
      setNumberOfCartItems(tempNumber);
    }
    return handler;
  };

  const decrementAddItemToCartNum = () => (itemCount === 1) ? 1 : setItemCount(itemCount - 1);
  const incrementAddItemToCartNum = () => setItemCount(itemCount + 1);
  const handleChangeAddItemToCart = (e) => e.target.value;
  
  const addItemToCart = () => {
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
        setTotalPrice(temp);
        // console.table(newObj);
        const tempNumber = calcTotalCartItems();
        setNumberOfCartItems(tempNumber);
      }
    });
  };

  const removeItemFromCart = (index) => {
    const handle = () => {
      const newObj = [...arrayOfItems];
      setNumberOfCartItems(numberOfCartItems - newObj[index].count);
      newObj[index].count = 0;
      setArrayOfItems(newObj);
      const temp = calcTotalPrice().toFixed(2);
      setTotalPrice(temp);
    };
    return handle;
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
          render={(props) => (<ShoppingCart {...props} 
            image={imageArray}
            numberOfCartItems={numberOfCartItems}
            array={arrayOfItems}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
            totalSumState={totalPrice}
            removeItemFromCart={removeItemFromCart}
          />)}
        />
                
        <Route
          exact path={arrayOfItems[0].url}
          render={(props) => (<ShopItemProps {...props} 
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
          render={(props) => (<ShopItemProps {...props} 
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
          render={(props) => (<ShopItemProps {...props} 
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
          render={(props) => (<ShopItemProps {...props} 
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
          render={(props) => (<ShopItemProps {...props} 
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