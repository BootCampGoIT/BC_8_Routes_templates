import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProfilePage from "../pages/ProfilePage";

export const mainRoutes = [
  { name: "home", path: "/", exact: true, component: HomePage },
  { name: "products", path: "/products", exact: true, component: ProductsPage },
  { name: "administration", path: "/admin", exact: true, component: AdminPage },
  { name: "cart", path: "/cart", exact: true, component: CartPage },
  { name: "profile", path: "/profile", exact: true, component: ProfilePage },
  { name: "registration", path: "/register", exact: true, component: AuthPage },
  { name: "login", path: "/login", exact: true, component: AuthPage },
];
