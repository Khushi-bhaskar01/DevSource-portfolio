import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Khushi from "./pages/Khushi";
import Atharv from "./pages/Atharv";
import Nikhil from "./pages/Nikhil";
import Suraj from "./pages/Suraj";
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/khushi"
        element={
          <div className="portfolio-khushi">
            <Khushi />
          </div>
        }
      />

      <Route
        path="/atharv"
        element={
          <div className="portfolio-atharv">
            <Atharv />
          </div>
        }
      />

      <Route
        path="/nikhil"
        element={
          <div className="portfolio-nikhil">
            <Nikhil />
          </div>
        }
      />

      <Route
        path="/jiya"
        element={
          <div className="portfolio-jiya">
            <Portfolio />
          </div>
        }
      />

      <Route
        path="/Suraj"
        element={<Suraj />}
      />

    </Routes>
  );
}

export default App;
