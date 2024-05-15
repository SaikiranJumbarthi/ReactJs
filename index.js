import React from "react";
import ReactDOM from "react-dom/client";
import Todolist from "./TodoList/Todolist";
import EditTodo from "./TodoList/EditTodo";
import { BrowserRouter, Route, Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Router>
      <Route path="/todo" element={<Todolist />} />
      <Route path="/edit" element={<EditTodo />} />
    </Router>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
