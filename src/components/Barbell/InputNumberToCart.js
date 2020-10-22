import React from 'react';

const InputNumberToCart = (props) => {
  return (
    <div className="quantity">
      <button className="input-button decrement"onClick={props.decrementClick}>-</button>
      <input 
        className={props.classNameInput}
        type="number"
        value={props.itemCount} 
        onChange={props.handleChange}
      />
      <button className="input-button increment" onClick={props.incrementClick}>+</button>
    </div>
  );
};

export default InputNumberToCart;