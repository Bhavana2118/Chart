import React from 'react';
import "./Styles.css";
import { NavLink } from "react-router-dom";

function Nav (){
  return (
    <nav>
      <div className="menu">
      </div>
      <ul>
            <li className="Table">
          <NavLink to="/">Table</NavLink>
        </li>
            <li className="Chaart">
          <NavLink to="/LineChart">Chart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;