import React from 'react';
import imageArray from './imageData';
import EquipmentItems from './EquipmentItems';
 
const Equipment = () => {
  return (
    <div className="component equipment-component">
      <h1 className="weightlifting-header">WEIGHTLIFTING BARBELLS</h1>
      <div className="shop-items">
        <EquipmentItems link="/equipment/0" image={imageArray[0]} itemName="IWF Weightlifting Competition Bar - 20kg, men" itemPrice="$1,100.00 USD" />
        <EquipmentItems link="/equipment/1" image={imageArray[1]} itemName="IWF Weightlifting Competition Bar - 15kg, women" itemPrice="$1,100.00 USD" />
        <EquipmentItems link="/equipment/2" image={imageArray[2]} itemName="IWF Weightlifting Training Bar - 20kg, men" itemPrice="$915.00 USD" />
        <EquipmentItems link="/equipment/3" image={imageArray[3]} itemName="IWF Weightlifting Training Bar - 15kg, women" itemPrice="$915.00 USD" />
        <EquipmentItems link="/equipment/4" image={imageArray[4]} itemName="Performance Weightlifting Bar - 20kg, men" itemPrice="$776.00 USD" />
        <EquipmentItems link="/equipment/5" image={imageArray[5]} itemName="Performance Weightlifting Bar - 15kg, women" itemPrice="$776.00 USD" />
      </div>
    </div>
  );
}

export default Equipment;