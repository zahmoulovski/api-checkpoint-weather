
import React, { useReducer, useContext } from "react";
import {WeatherReducer} from './Reducer';

const WeatherAPPContext = React.createContext();
    const WeatherAPPProvider = ({children})=>{
    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
            "city": "Tunis", 
            "lat": "36.8008", 
            "lng": "10.1800", 
            "country": "Tunisia", 
            "iso2": "TN", 
            "admin_name": "Tunis", 
            "capital": "primary", 
            "population": "1056247", 
            "population_proper": "1056247"
          },
          current:'',
          daily:''
    })
    
    return (
        <WeatherAPPContext.Provider value={{state, dispatch}} >
            {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;
export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAPPContext);
}