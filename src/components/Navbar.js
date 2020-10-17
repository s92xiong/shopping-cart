import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <nav className="navbar">
      <Link to="/" className="link"><h1 className="title">ELEIKO</h1></Link>
      <div className="nav-links">
        <Link to="/equipment" className="link">
          <h4>EQUIPMENT</h4>
        </Link>
        <Link to="/about" className="link">
          <h4 className="about-link">ABOUT</h4>
        </Link>
        <Link to="/cart" className="link">
          <div className="shopping-cart-div">
            <i className="fa fa-shopping-cart"></i>
            <div className="shopping-cart-count">
              {(cartItemCount > 9) ? "9+" : cartItemCount}
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;