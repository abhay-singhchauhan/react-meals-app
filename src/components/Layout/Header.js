import react from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="topHeader">
      <div>
        <h3>React Meals</h3>
        <div className="cartButton" onClick={props.onShowCart}>
          <h4>Cart</h4>
          <p className="cartCount">0</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
