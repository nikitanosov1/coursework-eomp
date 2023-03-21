import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
