import React from 'react';
import InputNumberCart from './InputNumberCart';

const RenderShopItem = (props) => {
  return (
    <div className="barbell-shop-div">
      <img src={props.image} alt="" className="large-item-image"/>
      <div className="add-to-cart-div">
        <h2>ELEIKO</h2>
        <hr/>
        <p>{props.itemName}</p>
        <p><strong>{props.itemPrice}</strong></p>
        <InputNumberCart
          itemCount={props.itemCount}
          handleChange={props.handleChange}
          decrementClick={props.decrementClick}
          incrementClick={props.incrementClick}
          classNameInput="input-field-number"
        />
        <input type="submit" value="ADD TO CART" className="add-to-cart-button" onClick={props.handleSubmit} />
      </div>
    </div>
  );
};

export default RenderShopItem;