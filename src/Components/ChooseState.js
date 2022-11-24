import React, {useEffect} from 'react';
import cities from '../Data/tn.json';
import axios from "axios";
import  {UseWeatherAppContext} from './Context';

const ChooseStateComponents = ()=>{
    const {state:{city}, dispatch} = UseWeatherAppContext();
    const handleChange = (e)=>{
        const selectedCity = cities.filter(
            (city) => city.city === e.target.value
        )[0]
        dispatch({
            type:'SET_CITY',
            payload:{...selectedCity}
        })
    }

    const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
    let exclude = 'hourly,minutely';
    const ULR =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`
    
    const fetchData = ()=>{
        axios(ULR).then((data)=>{
            let _daily = data.data.daily
            dispatch({
                type:'SET_DAILY',
                payload:_daily
            })      
        })
    }
    useEffect(()=>{
       fetchData();
    }, [city])

    return (
        <>
            <div className='stateWrap'>
                <select className='stateMenu' defaultValue={city} onChange={handleChange}>
                    {
                        cities && cities.length > 0  && cities.map((city)=>{
                            return(
                                <option key={`${city.population}${city.lat}`} value={city.city}>
                                    {city.city} -  {city.admin_name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default ChooseStateComponents;



// 
// 34480b98aa332da53123a0ac63a4ea9d weather api key
// 9d384d7d44b119d743707aeed2617bf4
// https://home.openweathermap.org/api_keys



// https://simplemaps.com/data/in-cities
// https://openweathermap.org/
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/3.0/onecall?lat=20&lon=85&appid=34480b98aa332da53123a0ac63a4ea9d

