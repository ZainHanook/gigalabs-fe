import React from "react";
import { PostIt } from "./components/PostIt";
import Login from "./components/Login";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/post" element={<PostIt />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
