const Country = ({country}) => {
    const {name, area, population} = country;
    return (
        <div className="country">
            <h3>Name : {name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
        </div>
    );
};

import './country.css'
export default Country;