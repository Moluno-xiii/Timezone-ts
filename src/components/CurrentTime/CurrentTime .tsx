import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./CurrentTime.module.css"
import { Outlet } from "react-router-dom";
import CurrentNav from "./CurrentNav";
import Header from "../Header";
const CurrentTime: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header />

      <h1 className="test">select an option</h1>
      <CurrentNav />
      <Outlet />
    </div>
  );
};

export default CurrentTime;
