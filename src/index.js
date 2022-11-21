import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import BuildToDo from "./buildToDo";
import "./index.css";
import store from "./redux/store";

// const apiRoot = "https://todolist-ruslan.azurewebsites.net";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //     </React.StrictMode>
  <Provider store={store}>
    <BuildToDo />
  </Provider>
);
