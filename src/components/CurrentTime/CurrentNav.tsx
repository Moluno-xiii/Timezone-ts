import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CurrentNav.module.css";

const CurrentNav: React.FC = () => {
  return (
    <div className={styles.div}>
      <nav className={styles.navigation}>
        <ul id={styles.ul}>
          <li className="btn">
            <NavLink to="ip address">Use IP Address</NavLink>
          </li>
          <li className="btn">
            <NavLink to="coordinates" >Use Coordinates</NavLink>
          </li>
          <li className="btn">
            <NavLink to="automatically">Automatically</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CurrentNav;
