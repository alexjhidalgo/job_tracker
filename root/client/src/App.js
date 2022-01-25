import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Navbar />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
