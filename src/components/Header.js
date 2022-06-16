import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h3 className={classes.appHeader}>Gloceries App</h3>
    </header>
  );
};

export default Header;
