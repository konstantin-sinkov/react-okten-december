import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carsService = {
    getCars: () => axiosService.get(urls.cars),
    getCarById: (id) => axiosService.get(`${urls.cars}/${id}`),
    createCar: (car) => axiosService.post(urls.cars, car),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar)
}

export {carsService};
