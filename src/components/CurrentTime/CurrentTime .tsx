import React from "react";
// import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CurrentNav from "./CurrentNav";
import Header from "../Header";
const CurrentTime: React.FC = () => {
  return (
    <div className="current-time">
      <Header />

      <h1 className="test">select an option</h1>
      <CurrentNav />
      <Outlet />
      <h1></h1>
    </div>
  );
};

export default CurrentTime;
