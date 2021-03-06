import React from "react";
import ReactDOM from "react-dom";
import Bugs from "./components/Bugs";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
// import BugsList from "./components/BugsList";
import "./styles.css";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Bugs />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
