import React from 'react';
import ShoppingCartItems from './ShoppingCartItems';

const ShoppingCart = (props) => {
  if (props.numberOfCartItems === 0) {
    return (
      <div>
        <div className="shopping-cart-header"><p>Shopping Cart</p></div>
        <h1 className="conditional-header">There are no items in your cart.</h1>
      </div>
    );
  }

  return (
    <div className="component">
      <div className="shopping-cart-header"><p>Shopping Cart</p></div>
      <div className="shopping-cart-component">
        <div className="shopping-cart-component-inner">
          <ShoppingCartItems
            array={props.array}
            image={props.image}
            decrementCount={props.decrementCount}
            incrementCount={props.incrementCount}
            removeItemFromCart={props.removeItemFromCart}
          />
        </div>
        <div className="total-price">
          <h2>Order Summary</h2>
          <p>Total: <strong>${props.totalSumState}</strong></p>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;