import React from 'react';
import ShoppingCart2 from './ShoppingCart2';

const ShoppingCart = (props) => {
  if (props.numberOfCartItems === 0) {
    return <h1 className="conditional-header">You have no items in your cart!</h1>
  }

  return (
    <div className="component shopping-cart-component">
      <div className="shopping-cart-header"><p>Shopping Cart</p></div>
      <ShoppingCart2
        array={props.array}
        image={props.image}
        decrementCount={props.decrementCount}
        incrementCount={props.incrementCount}
        // removeItemFromCart={removeItemFromCart}
      />
      <div>
        <h2>Summary</h2>
        <p>Total Price: ${props.totalSumState}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;

// (1) Add delete button functionality to remove the item from the cart
// (2) Style "You have no items in your cart"
// (3) Style cart items