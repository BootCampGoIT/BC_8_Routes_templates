import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage" /* webpackChunkName: "HomePage" */)),
  },
  {
    name: "products",
    path: "/products",
    exact: false,
    component: lazy(() => import("../pages/ProductsPage" /* webpackChunkName: "ProductsPage" */)),
  },
  {
    name: "administration",
    path: "/admin",
    exact: true,
    component: lazy(() => import("../pages/AdminPage" /* webpackChunkName: "AdminPage" */)),
  },
  {
    name: "cart",
    path: "/cart",
    exact: true,
    component: lazy(() => import("../pages/CartPage" /* webpackChunkName: "CartPage" */)),
  },
  {
    name: "profile",
    path: "/profile",
    exact: true,
    component: lazy(() => import("../pages/ProfilePage" /* webpackChunkName: "ProfilePage" */)),
  },
  {
    name: "registration",
    path: "/register",
    exact: true,
    component: lazy(() => import("../pages/AuthPage" /* webpackChunkName: "AuthPage" */)),
  },
  {
    name: "login",
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/AuthPage" /* webpackChunkName: "AuthPage" */)),
  },
];
