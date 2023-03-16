import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { TransactionProvider } from "./context/TransactionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransactionProvider>
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </React.StrictMode>
  </TransactionProvider>
);
