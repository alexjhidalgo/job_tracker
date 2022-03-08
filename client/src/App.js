import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Applications from "./components/applications/Applications";
import Contacts from "./components/contacts/Contacts";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<Navbar />}>
            <Route path="/applications" element={<Applications />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
