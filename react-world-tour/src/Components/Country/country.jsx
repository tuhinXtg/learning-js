const Country = ({country}) => {
    const {name, area, population,cca3} = country;

    const [visited, setvisited] = useState(false)
    const handleVisited = () =>{
        setvisited(true);
    }

    return (
        <div className="country">
            <h3>Name : {name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={handleVisited}>Visited</button>
            {visited && ' I have visited the country.'}
        </div>
    );
};

import { useState } from 'react';
import './country.css'
export default Country;