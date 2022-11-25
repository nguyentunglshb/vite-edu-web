import { RouteObject } from "react-router-dom";
import { lazyImport } from "../utils";

const { Home } = lazyImport(() => import("../pages"), "Home");

export function publicRoutes(): RouteObject {
  return {
    path: "/auth",
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Home /> },
    ],
  };
}
