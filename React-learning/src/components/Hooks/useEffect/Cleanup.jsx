import { useEffect, useState } from 'react'
import './index.css'

export const CleanupFun = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)

        return () => clearInterval(timer);  // yaha useefect sirf ek baar chl rha hai qki dependency arr khali hai , then setinterval (uska child chl rha hai) because of closer or cleanup fun prev value ko remove krte jaa raha hai or ek new value chala rha hai(memor seee)....

    }, [])
    return (
        <div>
            <h1>Youtube subscribers</h1>
            <p>{count}</p>
        </div>
    )
}