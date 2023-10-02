import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import {FaTree} from "react-icons/fa";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import logo from './logo.png';




const Navbar = () => {
  const[dropdown,setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          BabyBook
        <img src={logo} alt='Quill pen' />
        </Link>
      <ul className="nav-items">
        {navItems.map((item) => {
          if(item.title === "SEARCH BOOK BY AGE") {
            return (
              <li key={item.id}
               className={item.cName}
              onMouseEnter={()=> setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              >
              <Link to={item.path} >{item.title}</Link>
              {dropdown && <Dropdown />}
              </li>
              );
          }
          return (
          <li key={item.id} className={item.cName}>
            <Link to={item.path}>{item.title}</Link>
          </li>
          );
        })}
      </ul>
    </nav>
    </>
  );
};

export default Navbar
