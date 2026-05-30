import { useEffect, useState } from "react";
import Country from "./Country/country";
import './countries.css'

const Countries = () => {
    const [countries, setcountries] = useState([])
    const [visitedcountries, setVisitedcountriees] = useState([])
    const [visitedFlags, setvisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(res => res.json())
            .then(data => setcountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('Add this to your visited country')
        const newVisitedCountries = [...visitedcountries, country]
        setVisitedcountriees(newVisitedCountries)
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag]
        setvisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h5>Visited countries : {visitedcountries.length}</h5>
                <ul>
                    {
                        visitedcountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;