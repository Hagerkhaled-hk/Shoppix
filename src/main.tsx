import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import LightContextProvider from "./context/lightContext/lightContext.jsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <LightContextProvider>
      <App />
      </LightContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
