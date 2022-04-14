import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/cars.service";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const carSubmit = async (car) => {
        const {data} = await carsService.createCar(car); //after post carObj. to API we get new obj. with id in response
        // console.log(data);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(carSubmit)}>
                <div><label>Model:<input type="text" {...register('model')}/></label></div>
                <div><label>Price:<input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
                <div><label>Year:<input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
                <button>save</button>
            </form>
        
        </div>
    );
}

export {CarForm};
