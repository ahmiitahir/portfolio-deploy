import "./App.css";
import Home from "./components/Home/Home";

import AllProjects from "./components/AllProjects/AllProjects";

import { Routes, Route } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "./store/mode-context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#E8F0ED",
        color: darkMode && "#E8F0ED",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;
