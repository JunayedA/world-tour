import { useState } from 'react';
import './country.css'
export default function Countrie({country, handleVisitedCountries}){
    const {area, capital, region, altSpellings,flags} = country;
    const [visit, setVisit] = useState(false);
    // console.log(handleVisitedCountries)
    const handleVisit = () =>{
        setVisit(!visit)
    }
    // console.log(country)
    return (
        <div className="country-style">
            <h3>Area: {area} KM<sup>2</sup></h3>
            <h2>Region: {region}</h2>
            <h3>Capital: {capital}</h3>
            <h4>Name: {altSpellings}</h4>
            <img src={flags.svg} width={300} alt="" />
            <button onClick={()=> handleVisitedCountries(country)}>mark visited</button>
            <br />
            <button onClick={handleVisit}>{visit ? 'going': 'visit'}</button>
            <p>{visit ? 'i visited already' : 'i want to go'}</p>
        </div>
    )
}