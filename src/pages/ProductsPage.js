import React from "react";
import ContentSwitcher from "../components/contentSwitcher/ContentSwitcher";
// import withState from "../components/hoc/withState";
import Navigation from "../components/navigation/Navigation";
import { productRoutes } from "../routes/productRoutes";

const ProductsPage = ({ match, location, history,  }) => {
  // console.log(newState);
  return (
    <>
    {/* //   <button onClick={() => newFunctions.addNewData({ id: 10, name: "Milk" })}>
    //     Add item
    //   </button> */}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet optio
        deserunt recusandae expedita culpa unde? Cupiditate, illo soluta id
        quod, amet voluptates, unde modi sapiente reiciendis perspiciatis animi
        corporis officiis? Culpa iure perspiciatis laborum, iste doloremque in
        voluptate vero. Quaerat accusantium aut eius autem quas enim, non rerum
        harum officiis error, voluptatem, cupiditate quae aperiam iste? Velit
        totam ab dolorum non inventore et provident cupiditate in nostrum veniam
        laudantium dicta sunt expedita natus nobis perspiciatis, eveniet
        deserunt necessitatibus culpa nihil architecto dignissimos! Enim, quis
        nulla dignissimos illum eos eaque dicta eum natus deserunt fugiat harum
        porro, rerum quo dolorum laborum.
      </p>
      <Navigation routes={productRoutes} url={match.url} />
      <ContentSwitcher routes={productRoutes} path={match.path} />
    </>
  );
};

export default ProductsPage;
