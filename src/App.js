import './App.css';
import {CarForm, Cars} from "./components";
import {useState} from "react";

function App() {
    const [newCar, setNewCar] = useState(null);
    
    return (
        <div>
            <CarForm/>
            <Cars />
        </div>
    );
}

export default App;
