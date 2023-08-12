import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TwatsContextProvider } from "./context/TwatsContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <TwatsContextProvider>
        <App />
      </TwatsContextProvider>
    </React.StrictMode>,
  );
}
