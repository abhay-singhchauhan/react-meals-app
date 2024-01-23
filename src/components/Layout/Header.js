import react, { useReducer } from "react";
import "./Header.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemNumber = cartCtx.items.length;

  return (
    <div className="topHeader">
      <div>
        <h3>React Meals</h3>
        <div className="cartButton" onClick={props.onShowCart}>
          <h4>Cart</h4>
          <p className="cartCount">{cartItemNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
