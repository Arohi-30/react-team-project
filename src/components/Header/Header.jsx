import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="" width={100} />
        </Link>
         <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}
        >
          <NavLink to="/properties">Properties</NavLink>
          
            <a href="mailto:homzyrealestate@gmail.com">Contact</a>
         
          <button className="button">
            Login
          </button>
        </div>
         </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
      
    </section>
  );
}

export default Header