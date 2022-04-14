import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.service";

import {Car} from "../index";

const Cars = () => {
    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        carsService.getCars()
            .then(({data}) => setCars(data));
    }, []);
    
    return (
        <div>
            <h1><u>Cars List:</u></h1>
            {
                cars.map(car => <Car key={car.id} car={car} />)
            }
        </div>
    );
}

export {Cars};
