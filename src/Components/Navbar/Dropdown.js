import React from "react";
import { itemDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul 
      className={dropdown ? "submenu-items clicked" : "submenu-items"}
      onClick={() => setDropdown(!dropdown)}>
        {itemDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path}
               className={item.cName}
                onClick={() => setDropdown(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
