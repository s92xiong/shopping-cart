import React from 'react';

const InputNumberCart = (props) => {
  return (
    <div className="quantity">
      <button className="input-button decrement" onClick={props.decrementClick}>-</button>
      <input className="input-field-number" type="number" value={props.value} onChange={props.handleChange} />
      <button className="input-button increment" onClick={props.incrementClick}>+</button>
    </div>
  );
};

export default InputNumberCart;