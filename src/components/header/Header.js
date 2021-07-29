import React from "react";
import Navigation from "../navigation/Navigation";
import { HeaderStyled } from "./HeaderStyled";
import { mainRoutes } from "../../routes/mainRoutes";
import { withRouter } from "react-router-dom";

const Header = ({location}) => {
  return (
    <HeaderStyled>
      <Navigation routes={mainRoutes} prevPathname={location.pathname} />
    </HeaderStyled>
  );
};

export default withRouter(Header);
