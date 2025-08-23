import React, { useReducer, useState } from 'react'
export const UseReducer = () => {

    // Initial state object for useReducer
    const initialState = {
        count: 0,
        inc: 2,
        dec: 2,
    }
    const reducer = (state, action) => {
        console.log(state, action);
        // if (action.type === "increment") {
        //     return state + 1;
        // }
        // if (action.type === "decrement") {
        //     return state - 1;
        // }
        // if (action.type === "Reset") {
        //     return 0;
        // }
        // return state;


        //...state is used to keep other properties of state object unchanged. 

        switch (action.type) {
            case "increment":
                return { ...state, count: state.count + state.inc };

            case "decrement":
                return { ...state, count: state.count - 1 };

            case "Reset":
                return { ...state, count: 0 };

            default:
                return state;


        }


    }
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div><h1>Hii ! UseReducer hook jii</h1>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}> Increment</button>

            <button onClick={() => dispatch({ type: "decrement" })}>Dcrement</button>

            <button onClick={() => dispatch({ type: "Reset" })}> Reset</button>
        </div >

    )
}