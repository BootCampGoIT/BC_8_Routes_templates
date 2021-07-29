import Cars from "../components/products/Cars";
import Tools from "../components/products/Tools";
import Toys from "../components/products/Toys";

export const productRoutes = [
  { name: "toys", path: "/toys", exact: true, component: Toys },
  { name: "tools", path: "/tools", exact: true, component: Tools },
  { name: "cars", path: "/cars", exact: true, component: Cars },
];
