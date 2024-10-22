import { useEffect, useState } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from "./components/utilities/utilities";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getDataFromLocalStorage());
  }, []);

  function handelAddToCart(bottle) {
    addDataToLocalStorage(bottle.id);
    setCartItems(getDataFromLocalStorage());
  }

  return (
    <>
      <Navbar cartItems={cartItems}></Navbar>
      <Header></Header>
      <Bottles handelAddToCart={handelAddToCart}></Bottles>
    </>
  );
}

export default App;
