import React from 'react';
import competitionBar20kg from '../images/eleiko-iwf-weightlifting-competition-bar.jpg';
import competitionBar15kg from '../images/eleiko-iwf-weightlifting-competition-bar-women.jpg';
import trainingBar20kg from '../images/eleiko-iwf-weightlifting-training-bar.jpg';
import trainingBar15kg from '../images/eleiko-iwf-weightlifting-training-bar-women.jpg';
import performanceBar20kg from '../images/eleiko-performance-weightlifting-bar.jpg';
import performanceBar15kg from '../images/eleiko-performance-weightlifting-bar-women.jpg';
import ShopItem from './ShopItem';
 
const Equipment = () => {
  return (
    <div className="component equipment-component">
      <h1 className="weightlifting-header">WEIGHTLIFTING BARBELLS</h1>
      <div className="shop-items">
        <ShopItem link="/equipment/competition-bar-20kg-men-id-0" image={competitionBar20kg} itemName="IWF Weightlifting Competition Bar - 20kg, men" itemPrice="$1,100.00 USD" />
        <ShopItem link="/equipment/competition-bar-15kg-women-id-1" image={competitionBar15kg} itemName="IWF Weightlifting Competition Bar - 15kg, women" itemPrice="$1,100.00 USD" />
        <ShopItem link="/equipment/training-bar-20kg-men-id-2" image={trainingBar20kg} itemName="IWF Weightlifting Training Bar - 20kg, men" itemPrice="$915.00 USD" />
        <ShopItem link="/equipment/training-bar-15kg-women-id-3" image={trainingBar15kg} itemName="IWF Weightlifting Training Bar - 15kg, women" itemPrice="$915.00 USD" />
        <ShopItem link="/equipment/performance-bar-20kg-men-id-4" image={performanceBar20kg} itemName="Performance Weightlifting Bar - 20kg, men" itemPrice="$776.00 USD" />
        <ShopItem link="/equipment/performance-bar-15kg-women-id-5" image={performanceBar15kg} itemName="Performance Weightlifting Bar - 15kg, women" itemPrice="$776.00 USD" />
      </div>
    </div>
  );
}

export default Equipment;