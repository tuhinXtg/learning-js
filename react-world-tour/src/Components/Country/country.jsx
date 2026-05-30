const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, area, population,cca3} = country;

    const [visited, setvisited] = useState(false)
    const handleVisited = () =>{
        setvisited(!visited);
    }

    const passWithParams = () =>{
        handleVisitedCountry(country)
    }
    
    return (
        <div className={`country ${visited && `visited`}`}>
            <h3>Name : {name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={passWithParams}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? ' I have visited the country.' : 'I want to go'}
        </div>
    );
};

import { useState } from 'react';
import './country.css'
export default Country;