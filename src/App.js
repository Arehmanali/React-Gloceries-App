import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import OrderContextProvider from "./store/order-context";
import { useState } from "react";

function App() {
  return (
    <OrderContextProvider>
      <Header />
      <Content />
      <Footer />
    </OrderContextProvider>
  );
}

export default App;
