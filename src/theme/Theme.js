// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    test: "red", // Custom color that works with color and bg
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Checkbox: {
      baseStyle: {
        colorScheme: "customColorScheme", // Use your custom colorScheme here
      },
    },
  },
  customColorSchemes: {
    customColorScheme: {
        500: "#D289E",  // Set the color you want for the text
        600: "#FFFFFF",
    },
  },
});

export default theme;
