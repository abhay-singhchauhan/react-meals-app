import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState([]);

  const addItemFromCartHandler = (id) => {
    let isPresent = false;

    cartState.map((ele) => {
      if (ele.id === id.id) {
        isPresent = true;
        ele.amount = ele.amount + id.Price;
      }
    });

    if (!isPresent) {
      id.amount = id.Price;
      setCartState([...cartState, id]);
    }

    console.log(cartState, id);
  };

  console.log(cartState);
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartState,
    totalAmount: cartState.reduce((total, current) => {
      return total + current;
    }, 0),
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
