import React, { useState } from "react";
import Counts from "./CountMemo";

export const ReactMemo = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <h1>Count : {count}</h1>
                <button onClick={() => setCount((prev) => prev + 1)}>Incrmnt</button>
            </div>

            <Counts />
        </>

    );
}

//counts component renrender nahi hona chiye jab count state change ho rha hai isi liye hum us component ko memoize karenge
// react.memo is a higher order component jo ki functional component ko wrap karta hai aur usse memoize kar deta hai
// jab tak props change nahi hote tab tak component re-render nahi hota
// react.memo ko hum functional component ke sath use karte hai

//counts sirf ek baar render hoga jab app component render hoga bss then sirf jab counts ke props change honge tabhi wo re-render hoga