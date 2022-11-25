import { publicRoutes } from "./publicRoutes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [publicRoutes()],
  },
]);
