import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Khushi from "./pages/Khushi";
import Atharv from "./pages/Atharv";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/khushi" element={<Khushi />} />
    </Routes>
  );
}

export default App;
