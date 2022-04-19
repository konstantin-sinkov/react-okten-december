import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carsService} from "../../services/cars.service";

const CarForm = ({setNewCar}) => {
    const [formError, setFormError] = useState({});
    const {register, reset, handleSubmit} = useForm();

    const carSubmit = async (car) => {
        try {
            const {data} = await carsService.createCar(car); //after post carObj. to API we get new obj. with id in response
            setNewCar(data);
            reset();
        }
        catch (e) {
            setFormError(e.response.data);
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(carSubmit)}>
                <div><label>Model:<input type="text" {...register('model')}/></label></div>
                {formError.model && <span>{formError.model[0]}</span>}
                <div><label>Price:<input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
                {formError.price && <span>{formError.price[0]}</span>}
                <div><label>Year:<input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
                {formError.year && <span>{formError.year[0]}</span>}
                <button>save</button>
            </form>
        
        </div>
    );
}

export {CarForm};
