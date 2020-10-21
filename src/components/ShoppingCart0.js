import React, { useState } from 'react';
// import ShoppingCart1 from './ShoppingCart1';
import ShoppingCart2 from './ShoppingCart2';

const ShoppingCart = (props) => {

  const calcTotalPrice = () => {
    let totalSum = 0;    
    props.array.forEach(element => {
      let objSum = 0;
      if (element.count > 0) {
        objSum = element.price * element.count;
      } 
      totalSum = totalSum + objSum
    });
    return totalSum;
  };
  const totalSum = calcTotalPrice();
  const [shoppingCartItemCount, setShoppingCartItemCount] = useState(props.array);
  const [totalSumState, setTotalSumState] = useState(totalSum);

  const decrementCount = (index) => {
    const handler = () => {
      const newObj = [...shoppingCartItemCount];
      (newObj[index].count === 1) ? newObj[index].count = 1 : newObj[index].count--;
      setShoppingCartItemCount(newObj);
      setTotalSumState(totalSum);
    }
    return handler;
  }

  // Move this function 1 level up to ShoppingCart0.js
  const incrementCount = (index) => {
    const handler = () => {
      const newObj = [...shoppingCartItemCount];
      newObj[index].count++;
      setShoppingCartItemCount(newObj);
      setTotalSumState(totalSum);
    }
    return handler;
  }

  if (props.numberOfCartItems === 0) {
    return <h1 className="conditional-header">You have no items in your cart!</h1>
  }

  return (
    <div className="component shopping-cart-component">
      <div className="shopping-cart-header"><p>Shopping Cart</p></div>
      <ShoppingCart2 
        // numberOfCartItems={props.numberOfCartItems}
        array={props.array}
        image={props.image}
        decrementCount={decrementCount}
        incrementCount={incrementCount}
      />
      <div>
        Total Price: $ {totalSumState}
      </div>
    </div>
  );
};

export default ShoppingCart;