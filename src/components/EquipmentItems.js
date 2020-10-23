import React from 'react'; 
// import { Link } from 'react-router-dom';

const EquipmentItem = (props) => {
  return (
    <div className="item">
      {/* <Link className="link link-shop-item" to={props.link}>
        <div className="item-image-div">
          <img src={props.image} alt=""/>
        </div>
        <h4>ELEIKO</h4>
        <p className="item-name">{props.itemName}</p>
      </Link> */}
      <div className="item-image-div">
        <img src={props.image} alt=""/>
      </div>
      <h4>ELEIKO</h4>
      <p className="item-name">{props.itemName}</p>
      <p className="item-price">{props.itemPrice}</p>
      <button className="equipment-button" onClick={props.onClick} name={props.name}>ADD TO CART</button>
    </div>
  );
}

export default EquipmentItem;