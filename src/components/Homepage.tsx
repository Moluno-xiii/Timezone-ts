import React from "react";
import { NavLink } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <ul className="homepage">
      <li className="items">
        <NavLink to="current time"> Get Current Time </NavLink>
      </li>
      <li className="items">
        <NavLink to="Available zones"> See All Available time zones </NavLink>
      </li>
      <li className="items">
        <NavLink to="conversion">convert to another time zone</NavLink>
      </li>
      <li className="items">
        <NavLink to="calculate">calculate time</NavLink>
      </li>
    </ul>
  );
};

export default Homepage;
