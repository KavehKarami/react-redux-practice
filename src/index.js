import React from "react";
import ReactDOM from "react-dom";
import Bugs from "./components/Bugs";
import configureStore from "./store/configureStore";
import StoreContext from "./contexts/storeContext";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Bugs />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
