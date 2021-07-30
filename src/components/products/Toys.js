import React from "react";
import { Link } from "react-router-dom";

const Toys = ({ location }) => {
  // console.log(location)
  return (
    <>
      <h2>Toys</h2>
      <Link
        to={{ pathname: "/", state: { from: location.pathname } }}>
        Go home
      </Link>
    </>
  );
};

export default Toys;
