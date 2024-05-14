import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Hello World 1" color="red" />
    <App name="Hello World 2" />
    <App name="Hello World 3" color="Green" />
    <App name="Hello World 4" />
    <App name="Hello World 5" color="Blue" />
    <App name="Hello World 6" />
    <App name="Hello World 7" color="Orange" />

    {/* <h1>Hello Saikiran Jumbarthi,</h1>
    <br />
    <p> Welcome TO React Tutorial's</p> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
