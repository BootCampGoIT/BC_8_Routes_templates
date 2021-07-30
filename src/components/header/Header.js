import React from "react";
import Navigation from "../navigation/Navigation";
import { HeaderStyled } from "./HeaderStyled";
import { mainRoutes } from "../../routes/mainRoutes";
import { Link, withRouter } from "react-router-dom";

const Header = ({ location }) => {
  return (
    <HeaderStyled>
      <Link to={{ pathname: "/products/toys", state: { from: location.pathname } }}>
        Go home
      </Link>
      <Navigation routes={mainRoutes} prevPathname={location.pathname} />
    </HeaderStyled>
  );
};

export default withRouter(Header);
