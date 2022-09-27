import React from "react";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context";

const CountryDetails = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [country, setCountry] = useState([]);
  const { name } = useParams();
  console.log(name, "checking");

  const fetchDetails = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const details = await res.json();
    setCountry(details);
    console.log(details);
  };
  useEffect(() => {
    fetchDetails();
  }, [name]);
  return (
    <>
      <div className=" country-details-container">
        <Link to="/">
          <button
            className="back"
            style={{
              backgroundColor: theme.state.darkMode
                ? "hsl(209, 23%, 22%)"
                : "white",
              color: darkMode && "white",
            }}
          >
            <FaArrowLeft />
            Back
          </button>
        </Link>

        <section className="countryDetails">
          {country.map(
            ({
              name,
              capital,
              region,
              population,
              subregion,
              languages,
              currencies,
              tld,
              flags,
              borders,
            }) => {
              const last = Object.values(name.nativeName).length - 1;
              console.log(last, "last");
              return (
                <article key={name}>
                  <div className="left">
                    <img src={flags.png} alt={name.common} />
                  </div>
                  <div className=" right">
                    <h2 className="country-name"> {name.common}</h2>

                    <div className="right-details">
                      <div className="country-details">
                        <h5>
                          Native Name:
                          <span>
                            {Object.values(name.nativeName)[last].common}
                          </span>
                        </h5>
                        <h5>
                          Population: <span> {population}</span>
                        </h5>
                        <h5>
                          Region: <span> {region}</span>
                        </h5>
                        <h5>
                          Sub Region:<span> {subregion}</span>
                        </h5>
                        <h5>
                          Capital: <span>{capital}</span>
                        </h5>
                      </div>
                      <div className="country-details">
                        <h5>
                          Top Level Domain: <span>{tld}</span>
                        </h5>
                        <h5>
                          Currencies:
                          <span>
                            {Object.values(currencies).map((currency) => (
                              <span>{currency.name}</span>
                            ))}
                          </span>
                        </h5>
                        <h5>
                          Language:
                          {Object.values(languages).map((lang, index) => (
                            <span> {lang} </span>
                          ))}
                        </h5>
                      </div>
                    </div>
                    <div
                      className="borders"
                      // style={{
                      //   backgroundColor: theme.state.darkMode
                      //     ? "hsl(209, 23%, 22%)"
                      //     : "white",
                      //   color: darkMode && "white",
                      // }}
                    >
                      <h5>
                        Borders:
                        {Object.values(borders).map((border) => (
                          <span>
                            <button className="border-btn">{border}</button>
                          </span>
                        ))}
                      </h5>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </section>
      </div>
    </>
  );
};

export default CountryDetails;
