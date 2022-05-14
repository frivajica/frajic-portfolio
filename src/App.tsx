import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "src/App.scss";
import { Home } from "./layouts/Home/index";
import { InLove } from "src/components/InLove";
import { YAhoraUnPoema } from "src/components/YAhoraUnPoema";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laFlorYElMendigo" element={<YAhoraUnPoema />} />
        <Route path="/holi" element={<InLove />} />
      </Routes>
    </Router>
  );
};

export default App;
