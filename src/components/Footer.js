import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <p className={classes.footer}>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
