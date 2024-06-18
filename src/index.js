import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
// In simple terms, this code initializes a React application, creates a root instance for rendering components, and renders the <App />
// component as the main part of the application into the HTML element with the id "root".