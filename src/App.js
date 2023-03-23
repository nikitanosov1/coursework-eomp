import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Graph } from "./pages/Graph";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/graph" element={<Graph />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
