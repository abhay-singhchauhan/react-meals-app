import React from "react";
import Header from "./components/Layout/Header";
import Modal from "./components/Layout/Modal";
import MealList from "./components/Meals/Meallist";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Modal></Modal>
      <MealList></MealList>
    </Fragment>
  );
}

export default App;
