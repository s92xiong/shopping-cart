import React from 'react';
import { useState } from 'react';
import InputNumberCart from './InputNumberCart';

const BarbellComponent = (props) => {
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (e) => e.target.value;
  const decrementClick = () => (count === 1) ? setCount(1) : setCount(count - 1);
  const incrementClick = () => setCount(count + 1);

  return (
    <div className="barbell-shop-div">
      <img src={props.image} alt="" className="large-item-image"/>
      <div className="add-to-cart-div">
        <h2>ELEIKO</h2>
        <hr/>
        <p>{props.itemName}</p>
        <form onSubmit={handleSubmit}>
          <InputNumberCart
            value={count}
            handleChange={handleChange}
            decrementClick={decrementClick}
            incrementClick={incrementClick}
          />
          <input type="submit" value="ADD TO QUOTATION CART" className="add-to-cart-button" />
        </form>
      </div>
    </div>
  );
};

export default BarbellComponent;