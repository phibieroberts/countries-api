import React, { useContext, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../context";
function Filter({ searchCountries, searchInput }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [regions, setRegions] = useState([]);

  // const region = [
  //   {
  //     name: "Africa",
  //   },
  //   {
  //     name: "America",
  //   },
  //   {
  //     name: "Asia",
  //   },
  //   {
  //     name: "Oceania",
  //   },
  //   {
  //     name: "Europe",
  //   },
  // ];
  // const fetchByRegion = async (region) => {
  //   const res = await fetch(`http://restcountries.com/v3.1/region/${region}`);
  //   const data = await res.json();
  //   setRegions(data);
  // };

  // useEffect(() => {
  //   fetchByRegion();
  // }, []);
  return (
    <div className="filter">
      <form
        className="search"
        style={{
          backgroundColor: theme.state.darkMode
            ? "hsl(209, 23%, 22%)"
            : "white",
          color: darkMode && "white",
        }}
      >
        <FaSearch />
        <input
          type="text"
          placeholder="Search for a country..."
          id="search"
          onChange={(e) => searchCountries(e.target.value)}
          value={searchInput}
          style={{
            backgroundColor: theme.state.darkMode
              ? "hsl(209, 23%, 22%)"
              : "white",
            color: darkMode && "white",
          }}
        />
      </form>
      <div className="region-filter">
        <select
          // value={region.name}
          // onChange={(e) => fetchByRegion(e.target.value)}
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
          <option value="All"> Filter by Region</option>
          <option value="Africa"> Africa</option>
          <option value="America"> America </option>
          <option value="Asia"> Asia</option>
          <option value="Europe"> Europe</option>
          <option value="Oceania"> Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
