import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="link"><h1 className="title">ELEIKO</h1></Link>
    <div className="nav-links">
      <Link to="/equipment" className="link"><h4>EQUIPMENT</h4></Link>
      <Link to="/about" className="link"><h4 className="about-link">ABOUT</h4></Link>
      <Link to="/cart" className="link"><i className="fa fa-shopping-cart"></i></Link>
    </div>
  </nav>
);

export default Navbar;