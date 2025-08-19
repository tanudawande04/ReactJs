import { useEffect, useState } from 'react';
import './index.css'

export const Useeffect = () => {
    const [date, setDate] = useState();



    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());

        }, 1000)


    }, [])
    return (
        <div>
            <h1>heloooo useEffect</h1>
            <h1>Date : {date}</h1>

        </div>

    )
}

