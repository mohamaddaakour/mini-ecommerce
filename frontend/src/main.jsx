import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { SnackbarProvider } from "notistack";
import App from "./App";
import { ThemeProviderWrapper } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
          <App />
      </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);