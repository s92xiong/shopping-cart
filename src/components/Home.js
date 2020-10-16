import React from 'react';
import logo from '../images/eleiko-logo.png';
import loadedBarbell from '../images/loaded-barbell.png';
import loadedBarbell2 from '../images/loaded-barbell2.png';

const Home = () => {
  return (
    <div className="component home-component">
      <div className="home-child">
        <img src={logo} alt="" className="logo"/>
        <div className="barbell-homepage">
          <img src={loadedBarbell2} alt="" className="barbell-fade loaded-barbell"/>
          <img src={loadedBarbell} alt="" className="barbell-fade loaded-barbell2 fade-in fade-out"/>
        </div>
      </div>
    </div>
  );
}

export default Home;