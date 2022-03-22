import React from "react";
import { Link } from 'react-router-dom';
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>STL IS HOME</div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Attractions'>Attractions</Link></li>
          <li><Link to='/About'>About</Link></li>
        </ul>
      </header>
    </div>
  );
}
