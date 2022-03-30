import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, population, region, area, flags } = props.country;
    // console.log(props.country);
    return (
        <div className='country  bg-success'>
            <h2>County Name:{name}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Region:{region}</small></p>
            <p><small>Area:{area}</small></p>

        </div>
    );
};

export default Country;