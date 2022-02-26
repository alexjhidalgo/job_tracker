import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<Navbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
