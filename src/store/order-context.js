import { createContext, useState } from "react";

export const OrderContext = createContext({});

export function OrderContextProvider(props) {
  const [cartOrders, setCartOrders] = useState(0);

  function addToCartHandler() {
    setCartOrders(cartOrders + 1);
  }
  function removeFromCartHandler() {
    setCartOrders(cartOrders - 1);
  }

  const context = {
    cartOrders,
    setCartOrders,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <OrderContext.Provider value={context}>
      {props.children}
    </OrderContext.Provider>
  );
}

export default OrderContextProvider;
