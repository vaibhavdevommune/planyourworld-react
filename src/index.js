import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "flatpickr/dist/flatpickr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-bs5";
import "datatables.net";
import "./assets/scss/global.scss"; 
import "./assets/scss/main.scss";
import "./assets/css/plugins.bundle.css";
import "./assets/css/style.bundle.css";
import "./index.css";

import "bootstrap/dist/js/bootstrap.bundle.min"; 
import "./assets/js/custom.js"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
