import React, { useContext, useState } from "react";
import classes from "./Content.module.css";
import { FaTrashAlt } from "react-icons/fa";

import { OrderContext } from "../store/order-context";

const Content = () => {
  const cartOrderCtx = useContext(OrderContext);

  const [item, setItem] = useState([
    { id: 1, checked: false, item: "item 1" },
    { id: 2, checked: false, item: "item 2" },
    { id: 3, checked: false, item: "item 3" },
    { id: 4, checked: false, item: "item 4" },
    { id: 5, checked: false, item: "item 5" },
    { id: 6, checked: false, item: "item 6" },
  ]);

  function isItemChecked(item) {
    return item.checked
      ? cartOrderCtx.removeFromCart()
      : cartOrderCtx.addToCart();
  }
  const handleCheckBox = (id) => {
    const listItem = item.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItem(listItem);
    localStorage.setItem("shoppinglist", JSON.stringify(listItem));
  };

  const handleDeleteBtn = (id) => {
    const listItem = item.filter((item) => item.id !== id);
    setItem(listItem);
    localStorage.setItem("shoppinglist", JSON.stringify(listItem));
  };

  return (
    <main className={classes.main}>
      <h1>Gloceries List</h1>
      {item.length ? (
        <ul>
          {item.map((item) => (
            <li className={classes.item} key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  handleCheckBox(item.id);
                  isItemChecked(item);
                }}
              ></input>
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => {
                  handleCheckBox(item.id);
                }}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                onClick={() => {
                  handleDeleteBtn(item.id);
                  if (item.checked) {
                    isItemChecked(item);
                  }
                }}
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ margin: "2rem", color: "darkred" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
