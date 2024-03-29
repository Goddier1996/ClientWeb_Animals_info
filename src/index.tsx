import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Import i18n.ts
import "./jsonDataChangeLanguage/i18n";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
