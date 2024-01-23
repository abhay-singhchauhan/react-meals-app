import "./Meallist.css";
import Input from "../UI/input";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Meallist = () => {
  const context = useContext(CartContext);

  const arr = [
    { id: 1, Name: "Abhay", Title: "dkjsfh iaidfh ", Price: "2000" },
    { id: 2, Name: "Paneer", Title: "Hi", Price: "3000" },
  ];

  function addItemToCart(e) {
    context.addItem(e);
    console.log(context);
  }
  return (
    <div className="MealCont">
      {arr.map((ele) => (
        <div>
          <div className="Meal">
            <h5>{ele.Name}</h5>
            <p>{ele.Title}</p>
            <h5 className="Price">$ {ele.Price}</h5>
          </div>
          <div>
            <Input
              input={{ className: "forItemIncrease", defaultValue: "1" }}
              label="Amount"
            ></Input>
            <button
              onClick={() => {
                return addItemToCart(ele);
              }}
            >
              +Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meallist;
