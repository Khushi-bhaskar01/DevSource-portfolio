import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Khushi from "./pages/Khushi";
import Atharv from "./pages/Atharv";
import Akash from "./pages/Akash";
import Nikhil from "./pages/Nikhil";
import Suraj from "./pages/Suraj";
import Vinit from "./pages/Vinit";
import Himanshu from "./pages/Himanshu";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* KHUSHI */}
      <Route
        path="/khushi"
        element={
          <div className="portfolio-khushi">
            <Khushi />
          </div>
        }
      />

      {/* ATHARV */}
      <Route
        path="/atharv"
        element={
          <div className="portfolio-atharv">
            <Atharv />
          </div>
        }
      />

      {/* NIKHIL */}
      <Route
        path="/nikhil"
        element={
          <div className="portfolio-nikhil">
            <Nikhil />
          </div>
        }
      />

      {/* AKASH */}
      <Route
        path="/akash"
        element={
          <div className="portfolio-akash">
            <Akash />
          </div>
        }
      />

      {/* JIYA / PORTFOLIO */}
      <Route
        path="/jiya"
        element={
          <div className="portfolio-jiya">
            <Portfolio />
          </div>
        }
      />

      {/* SURAJ */}
      <Route
        path="/suraj"
        element={
          <div className="portfolio-suraj">
            <Suraj />
          </div>
        }
      />

      {/* HIMANSHU */}
      <Route
        path="/himanshu"
        element={
          <div className="portfolio-himanshu">
            <Himanshu />
          </div>
        }
      />

      {/* VINIT */}
      <Route
        path="/vinit"
        element={
          <div className="portfolio-vinit">
            <Vinit />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
