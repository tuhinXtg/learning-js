import { useEffect, useState } from "react";

const Countries = () => {
    const [countries, setcountries] = useState([])
    useEffect(() => {
        fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(res => res.json())
        .then(data => setcountries(data))
    },[])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
        </div>
    );
};

export default Countries;