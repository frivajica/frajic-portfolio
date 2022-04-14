import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "src/App.scss";
import { Home } from "./layouts/Home/index";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laFlorYElMendigo" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
