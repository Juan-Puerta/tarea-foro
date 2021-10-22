import React from "react";
import routes from "./config/routes";
import { AppContextWrapper } from "./store/AppContext";
import "./App.css";

function App() {
  return <AppContextWrapper>{routes}</AppContextWrapper>;
}

export default App;
