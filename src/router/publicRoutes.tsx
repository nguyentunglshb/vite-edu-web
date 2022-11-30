import { RouteObject } from "react-router-dom";
import { lazyImport } from "../utils";

const { Home } = lazyImport(() => import("../pages"), "Home");
const { Login } = lazyImport(() => import("../pages"), "Login");

export function publicRoutes(): RouteObject {
  return {
    path: "/auth",
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
    ],
  };
}
