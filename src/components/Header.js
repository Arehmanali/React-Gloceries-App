import React, { useContext } from "react";

import classes from "./Header.module.css";
import { FaCartPlus } from "react-icons/fa";
import { OrderContext } from "../store/order-context";

const Header = () => {
  const cartOrdersCtx = useContext(OrderContext);
  console.log(cartOrdersCtx);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Gloceries App</div>
      <nav>
        <ul>
          <li className={classes.cart}>
            <FaCartPlus></FaCartPlus>
            <span className={classes.badge}>{cartOrdersCtx.cartOrders}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
