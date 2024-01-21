import React from "react";
import "./Meallist.css";
import Input from "../UI/input";

const Meallist = () => {
  const arr = [
    { Name: "Abhay", Title: "dkjsfh iaidfh ", Price: "2000" },
    { Name: "Paneer", Title: "Hi", Price: "3000" },
  ];

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
            <button>+Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meallist;
