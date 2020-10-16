import React from 'react'; 

const ShopItem = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt=""/>
      <h4>ELEIKO</h4>
      <p className="item-name">{props.itemName}</p>
      <p className="item-price">{props.itemPrice}</p>
    </div>
  );
}

export default ShopItem;