import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState([]);

  const addItemFromCartHandler = (id) => {
    let isPresent = false;

    cartState.map((ele) => {
      if (ele.id === id.id) {
        isPresent = true;
        ele.amount = +ele.amount + +id.Price;
      }
    });

    if (!isPresent) {
      id.amount = id.Price;
      setCartState([...cartState, id]);
    }

    console.log(cartState, id);
  };

  console.log(cartState);
  const removeItemFromCartHandler = (id) => {
    let isZero = false;
    cartState.map((ele) => {
      if (ele.id === id.id) {
        ele.amount = ele.amount - ele.Price;
        if (ele.amount <= 0) {
          isZero = true;
        }
      }
    });
    if (isZero) {
      const arr = cartState.filter((e) => {
        if (e.id !== id.id) {
          return true;
        }
      });
      setCartState(arr);
    }
    console.log(cartContext);
  };

  const cartContext = {
    items: cartState,
    totalAmount: cartState.reduce((accumulator, currentValue) => {
      console.log(accumulator);
      return accumulator + +currentValue.amount;
    }, 0),
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
