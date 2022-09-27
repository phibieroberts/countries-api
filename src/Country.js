import React from 'react'

function Country({country}) {
    const { name, population, region, capital, flags, numericCode } =country;


  return (
    <div key={numericCode} className="country">
   <div>
              <img src={flags.png} alt={name} />
              <div className="details">
              <h3>{name.common}</h3>
              <p><b>Population:</b> {population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>
              </div>
            </div>
    </div>
    
  )
}

export default Country