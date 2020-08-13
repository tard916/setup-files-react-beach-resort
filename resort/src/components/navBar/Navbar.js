import React, {useState} from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from "react-router-dom";
import logo from '../../images/vectorpaint.png';

const Navbar = () => {
  const [isOpen, setToggleIsOpen] = useState(false);
  const handleToggle = () => {
    setToggleIsOpen(!isOpen);
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Guinée Logment logo"/>
          </Link>
          <button className="nav-btn" type="button" onClick={handleToggle}>
            <FaAlignRight className="nav-icon"/>
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
