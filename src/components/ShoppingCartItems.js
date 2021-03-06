import React from 'react';

const ShoppingCartItems = (props) => {
  const handleInputChange = (e) => e.target.value;

  return props.array.map((element, i) => {
    if (element.count !== 0) {
      return (
        <div className="item-cart-div" key={i}>
          <img className="item-cart-image" src={props.image[i]} alt=""/>
          <p className="item-cart-div-para">ELEIKO {element.name}: <strong>${element.price}</strong></p>
          <div className="item-quantity">
            <button className="input-button input-button-cart decrement-item-count"onClick={props.decrementCount(i)}>-</button>
            <input 
              className="cart-number-input-field"
              type="number"
              value={element.count} 
              onChange={handleInputChange}
            />
            <button className="input-button input-button-cart increment-item-count" onClick={props.incrementCount(i)}>+</button>
          </div>
          <i className="fa fa-trash" onClick={props.removeItemFromCart(i)}></i>
        </div>
      );
    }
    return null;
  });
};

export default ShoppingCartItems;