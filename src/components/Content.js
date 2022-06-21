import React, { useContext, useState } from "react";
import classes from "./Content.module.css";
import { FaTrashAlt } from "react-icons/fa";

import { OrderContext } from "../store/order-context";
import AddItem from "./AddItem";
import SearchItems from "./SearchItems";

const Content = () => {
  const cartOrderCtx = useContext(OrderContext);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const [items, setItem] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  function isItemChecked(item) {
    return item.checked
      ? cartOrderCtx.removeFromCart()
      : cartOrderCtx.addToCart();
  }
  const handleCheckBox = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItem);
  };

  const setAndSaveItems = (newItems) => {
    setItem(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const handleDeleteBtn = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setAndSaveItems(listItem);
  };

  const addItem = (item) => {
    const id = items.length + 1;
    const myNewItem = { id, checked: false, item };
    const listItem = [...items, myNewItem];
    setAndSaveItems(listItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={classes.main}>
      <h1>Gloceries List</h1>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        addItem={addItem}
      />

      <div>
        {items.length ? (
          <ul>
            <SearchItems search={search} setSearch={setSearch} />
            {items.map(
              (item) =>
                item.item.toLowerCase().includes(search.toLowerCase()) && (
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
                      style={
                        item.checked ? { textDecoration: "line-through" } : null
                      }
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
                )
            )}
          </ul>
        ) : (
          <p style={{ margin: "2rem", color: "darkred" }}>
            Your list is empty.
          </p>
        )}
      </div>
    </main>
  );
};

export default Content;
