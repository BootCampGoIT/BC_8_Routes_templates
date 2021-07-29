import React from "react";
import ContentSwitcher from "../contentSwitcher/ContentSwitcher";
import { mainRoutes } from "../../routes/mainRoutes";
import { MainStyled } from "./MainStyled";
import { Route } from "react-router-dom";
import Test from "../Test";

const Main = () => {
  return (
    <MainStyled>
      {/* <Route path='/products/:id' component={Test} exact={false} /> */}
      <ContentSwitcher routes={mainRoutes} />
    </MainStyled>
  );
};

export default Main;
