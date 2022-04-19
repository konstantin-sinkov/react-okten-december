import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.service";

import {Car} from "../index";

const Cars = ({newCar}) => {
    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        carsService.getCars()
            .then(({data}) => setCars(data));
    }, []);
    
    useEffect(() => {
        if (newCar) {
            //setCars([...cars, newCar]); //Cause the problem Line 18:8:  React Hook useEffect has a missing dependency: 'cars'.
            
            setCars(prevState => [...prevState, newCar]); //cb f. for work with setter's previous value
        }
    }, [newCar])
    
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
