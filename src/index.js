import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { DarkModeContextProvider } from "./context/darkModeContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);

// pages papkasida barcha page lar joylashgan

// components da barcha componentlar joylashgan biz har bir componentni
// hohlagan page ga borib ishlatishimiz mumkin boladi
