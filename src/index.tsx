import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "./App";

const fonts = {
  body: "Lato, sans-serif",
  heading: "Lato, serif",
  mono: "Menlo, monospace",
};

const fontWeights = {
  normal: 400,
  semibold: 400,
};

const colors = {
  brand: {
    bgPrimary: "#272D45",
    primary: "#2C54EA",
    bgSecondary: "#202437",
  },
};

const theme = extendTheme({ fonts, fontWeights, colors });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
