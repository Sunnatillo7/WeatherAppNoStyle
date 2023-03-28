import React, { useState, useEffect } from 'react'
import axios from "axios"

function MainComponent() {
    const [city, setCity] = useState("Tashkent")
    const [state, setState] = useState("metric")
    const [lastData, setLastData] = useState({})
    // setState bilan selsiyga uzgartiradigan btn qil !!!


    const handleKeyUp = (evt) => {
        if (evt.code === "Enter") {
            setCity(evt.target.value)
        }
    }

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eafbbe8f57c5649128e1da7196686d17&units=${state}`)
            .then((res) => {
                // console.log(res) 
                setLastData(res.data)
            })

    }, [city, state])
    console.log(lastData)
    return (
        <div>
            <div className='text-center pt-5 space-x-5'>
                <input
                    onKeyUp={handleKeyUp}
                    className='border-2 border-slate-400 pl-2 py-1.5 rounded-md outline-none focus:border-blue-400' type="text" placeholder='Searching...' />
                <button className='bg-green-400 py-2 px-4 rounded-md text-white hover:opacity-60'>Find</button>
            </div>
            <div>
                <h1>{lastData?.name}</h1>
                <p>{lastData?.main?.temp}</p>
                <p>{lastData?.weather && lastData?.weather[0].main}</p>
                <p>{lastData?.weather && lastData?.weather[0].id}</p>
            </div>
        </div>
    )
}

export default MainComponent