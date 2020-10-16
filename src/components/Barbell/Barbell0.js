import React from 'react';
import BarbellComponent from './BarbellComponent';
import competitionBar20kg from '../../images/eleiko-iwf-weightlifting-competition-bar.jpg';

const Barbell0 = (props) => {
  console.log("This is Barbell0: IWF Weightlifting Competition Bar - 20 kg, men");
  return (
    <BarbellComponent image={competitionBar20kg} itemName="IWF WEIGHTLIFTING COMPETITION BAR - 20 KG, MEN" />
  );
};

export default Barbell0;