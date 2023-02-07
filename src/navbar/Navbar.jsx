import {Link} from 'react-router-dom'
import ReactSwitch from "react-switch";
import React, {  useContext } from "react";
import { ThemeContext } from "../App";


function Navbar () {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (

    <nav className={`nav-work`}>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </ul>
      </nav> 
  )
}

export default Navbar