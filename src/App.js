import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Graph } from "./pages/Graph";

export const GraphsContext = React.createContext();

function App() {
  return (
    <div className="App">
      <GraphsContext.Provider value={{ test: "qwe" }}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/graph" element={<Graph />}></Route>
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </GraphsContext.Provider>
    </div>
  );
}

export default App;
