
import './country.css';
const Country = ({country}) => {
    const {name,flags} = country;
    return (
        <div className='country'>
            <h3>Country : {name?.common} </h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;