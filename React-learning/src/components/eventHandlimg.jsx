import { use } from "react";

export const EventHandling = () => {
    const handleButtonclick = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.type);



        alert("hyy! i am event listner...")
    }

    const handleButtonChange = (user) => {

        console.log(`hii i am ${user} `);



        alert("hyy! i am  handler event listner...")
    }
    return (
        <>
            <button onClick={handleButtonclick}>click me</button> <br />

            {/* without passing any arguments */}

            <button onClick={(event) => handleButtonclick(event)}>Click me2</button> <br />

            {/* inline event handler */}

            <button onClick={(event) => console.log(event)}>inline eventhandler</button> <br />

            {/* function components with Arrow function */}

            <button onClick={() => alert("im a alert prompt")}>inline Arrow function</button> <br />

            <button onClick={() => handleButtonChange("tannu")}>onchanges</button>
        </>
    )

}
