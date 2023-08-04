import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { WorkoutsProvider } from "./context/WorkoutsContext";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <WorkoutsProvider>
        <App />
      </WorkoutsProvider>
    </AuthProvider>
  </React.StrictMode>
);
