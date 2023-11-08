import React from "react";
import { NavLink } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <ul className="homepage">
      <li>
        <NavLink to="current time"> Get Current Time </NavLink>
      </li>
      <li>
        <NavLink to="Available zones"> See All Available time zones </NavLink>
      </li>
      <li>
        <NavLink to="conversion">convert to another time zone</NavLink>
      </li>
      <li>
        <NavLink to="calculate">calculate time</NavLink>
      </li>
    </ul>
  );
};

export default Homepage;
