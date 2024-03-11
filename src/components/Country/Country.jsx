
import { useState } from 'react';
import './country.css';

const Country = ({country, handleVisitedCountry,hadleVisitedFlags}) => {
    const {name, flags,population, area,cca3} = country;

    const [visited, setVisited] = useState(false)
    
    const handleVisited = () => {
        setVisited(!visited);
    }
    
    return (
        <div className={`country ${visited?'visited':'non-visited'}`}>
            <h3 style={{color:visited?'purple':'green'}}>Country : {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Cca3 : {cca3}</small></p>
            <button onClick={() => hadleVisitedFlags(flags)}>Visit Flag </button>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited </button> <br />
            <button onClick={handleVisited}>{visited ? " Visited" : " Going"}</button>
                {
                    visited?'already visited':'i will visit'
                }
                
        </div>  
    );
};

export default Country;