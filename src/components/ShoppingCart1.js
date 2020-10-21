import React from 'react';

const ShoppingCart1 = (props) => {
  return (
    <div>
      Total Price: $ {props.array.reduce((sum, element) => sum + element.price, 0)}
    </div>
  )
};

export default ShoppingCart1;