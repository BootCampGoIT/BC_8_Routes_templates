import React from "react";
import { Switch, Route } from "react-router-dom";
// import AdminPage from "../../pages/AdminPage";
// import CartPage from "../../pages/CartPage";
// import HomePage from "../../pages/HomePage";
// import ProductsPage from "../../pages/ProductsPage";
import { mainRoutes } from "../../routes/mainRoutes";
import { MainStyled } from "./MainStyled";

const Main = () => {
  return (
    <MainStyled>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
        {/* <Route path='/' component={HomePage} exact />
        <Route path='/products' component={ProductsPage} exact />
        <Route path='/admin' component={AdminPage} exact />
        <Route path='/cart' component={CartPage} exact /> */}
      </Switch>
    </MainStyled>
  );
};

export default Main;
