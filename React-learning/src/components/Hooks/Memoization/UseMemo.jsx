import React, { useMemo, useState } from 'react'

export const ExpensiveComponent = () => {
    const sum = () => {
        console.log("Expensive Component Rendered");
        let i = 0;
        for (i = 0; i <= 1000000000; i++) {
            i += 1;
        }
        return i;
    }
    const total = useMemo(() => sum(), [])  // useMemo is used to memoize the result of the function so that it is not recalculated on every render
    return (
        <div>
            <h1>Sum : {total}</h1>
        </div>
    )
}

useMemo


const UseMemo = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <ExpensiveComponent />
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <h1>Parent rendred : {count}</h1>
        </div>

    )
}

export default UseMemo;