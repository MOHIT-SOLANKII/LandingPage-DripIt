import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Header from "./components/Header";
import { div } from "framer-motion/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <App />
  </div>
);
