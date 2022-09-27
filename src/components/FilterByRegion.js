import React, { useContext } from "react";
import { ThemeContext } from "../context";

function FilterByRegion() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="region-filter">
      <select
        name="select"
        id="select"
        className="select"
        style={{
          backgroundColor: theme.state.darkMode
            ? "hsl(209, 23%, 22%)"
            : "white",
          color: darkMode && "white",
        }}
      >
        <option value="filter by region"> Filter by Region</option>
        <option value="africa"> Africa</option>
        <option value="america"> America </option>
        <option value="asia"> Asia</option>
        <option value="europe"> Europe</option>
        <option value="oceania"> Oceania</option>
      </select>
    </div>
  );
}

export default FilterByRegion;
