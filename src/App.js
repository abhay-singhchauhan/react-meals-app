import React from "react";
import Header from "./components/Layout/Header";
import Modal from "./components/Layout/Modal";
import MealList from "./components/Meals/Meallist";
import { Fragment } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header></Header>
      <Modal></Modal>
      <MealList></MealList>
    </Fragment>
  );
}

export default App;
