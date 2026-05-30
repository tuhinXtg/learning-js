import { useEffect, useState } from "react";
import Country from "./Country/country";
import './countries.css'

const Countries = () => {
    const [countries, setcountries] = useState([])
    useEffect(() => {
        fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(res => res.json())
            .then(data => setcountries(data))
    }, [])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;