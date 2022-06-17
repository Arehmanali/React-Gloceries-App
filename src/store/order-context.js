import { createContext, useState } from "react";

const OrderContext = createContext({
  totalCartOrders: 0,
  addToCart: () => {},
  removeFromCart: () => {},
});

export function OrderContextProvider(props) {
  const [cartOrders, setCartOrders] = useState(0);

  function addToCartHandler() {
    setCartOrders(cartOrders + 1);
  }
  function removeFromCartHandler() {
    setCartOrders(cartOrders - 1);
  }

  const context = {
    totalCartOrders: cartOrders.length,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <OrderContext.Provider value={context}>
      {props.children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
