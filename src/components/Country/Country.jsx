
import './country.css';
const Country = ({country}) => {
    const {name, flags,population, area,cca3} = country;
    return (
        <div className='country'>
            <h3>Country : {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Cca3 : {cca3}</small></p>
        </div>
    );
};

export default Country;