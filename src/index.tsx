import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import GlobalStyeld from "styles/global-styeld";

const container = document.getElementById("root")!;
const root = createRoot(container);

async function start() {
  // 상태값 초기화
  //store.dispatch(extendedApiSlice.endpoints.getUsers.initiate())

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyeld />
        <App />
      </Provider>
    </React.StrictMode>
  );
}

start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
