const Country = ({country}) => {
    const {name} = country;
    return (
        <div className="country">
            <h3>Name : {name.common}</h3>
            <img src={country.flags.png} alt="" />
        </div>
    );
};

import './country.css'
export default Country;