import React from 'react';
import './Navbar.css';
// import LP2 from './LP2.jpeg';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://i.pinimg.com/originals/bf/42/3e/bf423ecc1eda03a54201514bbe15beca.png"alt="Louis Philippe Logo" className="logo" />
        <a href="/sale" className="nav-link">SALE</a>
        <a href="/new-arrivals" className="nav-link">NEW ARRIVALS</a>
        <a href="/products" className="nav-link">PRODUCTS</a>
        <a href="/collections" className="nav-link">COLLECTIONS</a>
        <a href="/customize" className="nav-link">CUSTOMIZE</a>
        <a href="/wedding-store" className="nav-link">WEDDING STORE</a>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search Suits" />
          <button type="submit" className="search-btn">
            <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="Search Icon" />
          </button>
        </div>
        {/* <div className="express-delivery">
          <a href="/express-delivery">EXPRESS DELIVERY</a>
        </div> */}
        <img src="https://cionews.co.in/wp-content/uploads/2024/03/Article-Main-Image-6-8.png" alt="Aditya Birla Logo" className="aditya-birla-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
