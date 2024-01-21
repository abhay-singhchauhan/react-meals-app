import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Modal from "./components/Layout/Modal";
import MealList from "./components/Meals/Meallist";
import { Fragment } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Modal></Modal>
      <MealList></MealList>
    </Fragment>
  );
}

export default App;
