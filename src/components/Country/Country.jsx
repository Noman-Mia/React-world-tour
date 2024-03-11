
import { useState } from 'react';
import './country.css';
const Country = ({country}) => {
    const {name, flags,population, area,cca3} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <h3>Country : {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Cca3 : {cca3}</small></p>
            <button onClick={handleVisited}>{visited? "Visited" : "going"}</button>
            {
                visited? 'already visited' : 'i will visit'
            }
        </div>
    );
};

export default Country;