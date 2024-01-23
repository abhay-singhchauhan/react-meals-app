import Modal from "../UI/modal";
import classes from "./CartItem.module.css";
import cartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const context = useContext(cartContext);
  function removeFunction(element) {
    return context.removeItem(element);
  }
  const cartItems = (
    <div className={classes["cart-items"]}>
      {context.items.map((item) => (
        <div key={item.id} id={item.id}>
          <div>
            <p>{item.Name}</p>

            <div className={classes.priceAmountCount}>
              <h4>${item.amount}</h4> <p>-x{+item.amount / +item.Price}</p>
            </div>
          </div>

          <div className={classes.plusminus}>
            <p
              onClick={() => {
                removeFunction(item);
              }}
            >
              -
            </p>

            <p>+</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{context.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
