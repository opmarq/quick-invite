import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "./App";
import theme from "./style/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={extendTheme(theme)}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
