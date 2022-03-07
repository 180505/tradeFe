import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";
import Home from "./Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
