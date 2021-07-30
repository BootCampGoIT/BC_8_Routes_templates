import React from "react";
import withState from "../hoc/withState";

const Test = ({ message }) => {
  return <h2>{message}</h2>;
};

export default withState(Test);
