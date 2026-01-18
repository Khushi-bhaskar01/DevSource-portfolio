
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Khushi from "./pages/Khushi";
import Atharv from "./pages/Atharv";
import Akash from "./pages/Akash";
import Nikhil from "./pages/Nikhil";
import Vinit from "./pages/Vinit";
import Portfolio from "./pages/Portfolio";
import Himanshu from "./pages/Himanshu";

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
        path="/akash"
        element={
          <div className="portfolio-akash">
            <Akash />
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
        path="/Himanshu"
        element={
          <div className="himanshu-portfolio">
            <Himanshu />
          </div>
        }
      />
      <Route
        path="/Vinit"
        element={
          <div className="vinit-portfolio">
            <Vinit />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
