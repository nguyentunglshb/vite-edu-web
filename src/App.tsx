import { Box, ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./router/publicRoutes";

import { theme } from "./themes";

import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
    children: [publicRoutes()],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w="100vw">
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
