import { useState } from "react";

export const State = () => {
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);


    // }

    const [count, setCount] = useState(0);
    console.log("parent component rendered");

    const handleButtonClick = () => {
        setCount(() => count + 1);
    }

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={handleButtonClick}>increment</button>
            </div>

            <Childcomponent count={count} />


        </>


    );
};


function Childcomponent({ count }) {
    console.log("child component rendered");


    return (
        <div>
            <h1>child component - {count}</h1>
        </div>


    );

};



