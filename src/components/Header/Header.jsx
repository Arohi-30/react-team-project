import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="" width={100} />
        </Link>

        <div className="flexCenter h-menu">
          <NavLink to="/properties">Properties</NavLink>
          
            <a href="mailto:homzyrealestate@gmail.com">Contact</a>
         
          <button className="button">
            Login
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header