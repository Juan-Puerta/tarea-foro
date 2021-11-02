import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./components/Mensaje/Mensaje.css";
import { AppContextWrapper } from "./store/AppContext";

ReactDOM.render(
  <AppContextWrapper
    basename={window.location.pathname || ""} /*style={styles.body}*/
  >
    <App />
  </AppContextWrapper>,
  document.getElementById("root")
);
