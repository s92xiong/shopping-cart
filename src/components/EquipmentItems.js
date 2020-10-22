import React from 'react'; 
import { Link } from 'react-router-dom';

const ShopItem = (props) => {
  return (
    <div className="item">
      <Link className="link link-shop-item" to={props.link}>
        <div className="item-image-div">
          <img src={props.image} alt=""/>
        </div>
        <h4>ELEIKO</h4>
        <p className="item-name">{props.itemName}</p>
      </Link>
      <p className="item-price">{props.itemPrice}</p>
    </div>
  );
}

export default ShopItem;