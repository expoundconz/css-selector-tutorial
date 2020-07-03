import React from "react";
import styles from "./Navigation.module.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
    <div className={styles.topnav}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </div>
    </Router>
  );
};

export default Navigation;
