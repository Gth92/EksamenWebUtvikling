import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home  from "./pages/Homepage";
import Games from "./pages/Games";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
