import { getByLabelText } from "@testing-library/react";
import "./input.css";
import { Fragment } from "react";

const Input = (props) => {
  return (
    <Fragment>
      <label>{props.label}</label>
      <input {...props.input}></input>
    </Fragment>
  );
};

export default Input;
