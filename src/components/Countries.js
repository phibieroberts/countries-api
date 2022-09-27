import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const url = "https://restcountries.com/v3.1/all";
function Countries() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const fetchData = async () => {
    const res = await fetch(url);
    const countries = await res.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );

      console.log(filteredCountries);
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
    // Object.values(country)
    //   .join("")
    //   .toLowerCase()
    //   .includes(searchValue.toLowerCase())
  };
  return (
    <>
      <Filter searchCountries={searchCountries} searchInput={searchInput} />
      {searchInput.length > 0 ? (
        <section className="grid">
          {filtered.map((country, index) => {
            return (
              <div key={index}>
                <Link to={`countries/${country.name.common}`} className="link">
                  <div
                    key={country.numericCode}
                    className="country"
                    style={{
                      backgroundColor: theme.state.darkMode
                        ? "hsl(209, 23%, 22%)"
                        : "white",
                      color: darkMode && "white",
                    }}
                  >
                    <div>
                      <img src={country.flags.png} alt={country.name} />
                      <div className="details">
                        <h3 className="country-name"> {country.name.common}</h3>
                        <p>
                          <b>Population: </b> {country.population}
                        </p>
                        <p>
                          <b>Region: </b>
                          {country.region}
                        </p>
                        <p>
                          <b>Capital: </b>
                          {country.capital}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </section>
      ) : (
        <section className="grid">
          {countries.map((country, index) => {
            return (
              <div key={index}>
                <Link to={`countries/${country.name.common}`} className="link">
                  <div
                    key={country.numericCode}
                    className="country"
                    style={{
                      backgroundColor: theme.state.darkMode
                        ? "hsl(209, 23%, 22%)"
                        : "white",
                      color: darkMode && "white",
                    }}
                  >
                    <div>
                      <img src={country.flags.png} alt={country.name} />
                      <div className="details">
                        <h3 className="country-name"> {country.name.common}</h3>
                        <p>
                          <b>Population: </b> {country.population}
                        </p>
                        <p>
                          <b>Region: </b>
                          {country.region}
                        </p>
                        <p>
                          <b>Capital: </b>
                          {country.capital}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
}
export default Countries;
