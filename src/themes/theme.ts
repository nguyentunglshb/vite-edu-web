import { extendTheme } from "@chakra-ui/react";
import { buttonOveride } from "./button";
import { colorOveride } from "./color";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "rgb(250, 250, 250)",
      },
    },
  },
  colors: colorOveride,
  components: {
    Button: buttonOveride,
  },
});
