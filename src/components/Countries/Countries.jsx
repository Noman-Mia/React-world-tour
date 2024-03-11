import { useEffect } from "react";
import './countries.css'
import { useState } from "react";
import Country from "../Country/Country";
const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlags , setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const hadleVisitedFlags = (flag)=> {
        const newVisitedFlags = [...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags);
    }
    const handleVisitedCountry = (country) => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
             <h4>Visited countries : {visitedCountries.length} </h4>
            <div>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul> 
            </div>
            <div className="container-flag">
             {
                visitedFlags.map((flag, index) => <img style={{width:"100px"}} key={index} src={flag.png}></img>)
             }
            </div>
            <h3>Countries : {countries.length} </h3>
            <div className="countries-container">
            {
                countries.map(country => <Country
                     key={country.cca3} 
                     hadleVisitedFlags = {hadleVisitedFlags}
                     handleVisitedCountry = {handleVisitedCountry}
                     country = {country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;