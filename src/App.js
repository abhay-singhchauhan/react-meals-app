import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Modal from "./components/Layout/Modal";
import MealList from "./components/Meals/Meallist";
import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Modal></Modal>
      <MealList></MealList>
    </CartProvider>
  );
}

export default App;
