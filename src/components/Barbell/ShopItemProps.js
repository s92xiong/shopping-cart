import React from 'react';
import RenderShopItem from './RenderShopItem';
// import competitionBar20kg from '../../images/eleiko-iwf-weightlifting-competition-bar.jpg';

const ShopItemProps = (props) => {
  return (
    <RenderShopItem
      image={props.image}
      itemName={props.itemName}
      itemPrice={props.itemPrice}
      itemCount={props.itemCount}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
      decrementClick={props.decrementClick}
      incrementClick={props.incrementClick}
    />
  );
};

export default ShopItemProps;