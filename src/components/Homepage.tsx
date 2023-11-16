import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Homepage.module.css"

const Homepage: React.FC = () => {
  return (
    <ul className={styles.homepage}>
      <li className={styles.items}>
        <NavLink to="current time"> Get Current Time </NavLink>
      </li>
      <li className={styles.items}>
        <NavLink to="Available zones"> See All Available time zones </NavLink>
      </li>
      <li className={styles.items}>
        <NavLink to="conversion">convert to another time zone</NavLink>
      </li>
      <li className={styles.items}>
        <NavLink to="calculate">calculate time</NavLink>
      </li>
    </ul>
  );
};



export default Homepage;
