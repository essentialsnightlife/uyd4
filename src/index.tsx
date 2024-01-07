import React from "react";

// import * as ReactDOMClient from "react-dom/client";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root") as Element;
// const root = ReactDOMClient.createRoot(container);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

hydrate(app, container);
