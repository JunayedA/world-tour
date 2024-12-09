import { useEffect, useState } from "react";
import Countrie from "./Countrie";
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const handleVisitedCountries = country =>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
        // console.log(country)
        console.log('add')
    }
    return(
        <div>
            <h1>Total country:{countries.length}</h1>
            <div>
                <h2>Visited Countries: {visitedCountries.length}</h2>
                {
                    visitedCountries.map(country => <ul>{country.name.common}</ul>)
                }
            </div>
            <div className="countries-style">
            {
                countries.map(country => <Countrie country={country} handleVisitedCountries={handleVisitedCountries}></Countrie>)
            }
            </div>
        </div>
    )
}