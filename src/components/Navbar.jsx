import React from "react";
import "./Navbar.css";
// import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className="head bg-slate-700 text-gray-400">
      <div >
        <ul  className="text-gray-300">
            <li className="text-green-300">&lt;PassOP&gt;</li>
          <li >Home</li> 
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
