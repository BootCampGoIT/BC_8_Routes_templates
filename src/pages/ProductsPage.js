import React from "react";
import ContentSwitcher from "../components/contentSwitcher/ContentSwitcher";
import Navigation from "../components/navigation/Navigation";
import { productRoutes } from "../routes/productRoutes";

const ProductsPage = ({ match, location, history }) => {
  console.log("match :>> ", match);
  return (
    <>
      <Navigation routes={productRoutes} url={match.url} />
      <ContentSwitcher routes={productRoutes} path={match.path} />
    </>
  );
};

export default ProductsPage;
