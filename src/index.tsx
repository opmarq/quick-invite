import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "./App";
import theme from "./style/theme";
import { StateProvider } from "./providers/stateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <ChakraProvider resetCSS theme={extendTheme(theme)}>
        <App />
      </ChakraProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
