import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Khushi from "./pages/Khushi";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/khushi" element={<Khushi />} />
    </Routes>
  );
}

export default App;
