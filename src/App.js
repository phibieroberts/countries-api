import React from "react";
import "./App.css";
import Countries from "./components/Countries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CountryDetails from "./CountryDetails";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "hsl(207, 26%, 17%)" : "white",
        color: darkMode && "white",
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="countries/:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
