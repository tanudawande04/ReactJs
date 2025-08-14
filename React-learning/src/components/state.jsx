import { useState } from "react"

export const States = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () => {

        setCount(count + step)

    }

    const handleDecrement = () => {
        setCount(count - step)

    }

    const handleReset = () => {
        setCount(0)

    }
    return (
        <div>
            <h1>usestateHooks Platform</h1>
            <h2>count : <span>{count}</span></h2>
            <div>
                <label>
                    Step :
                    <input type="number" onChange={(e) => setStep(Number(e.target.value))} />
                </label>
            </div>
            <button onClick={handleIncrement} disabled={count >= 100}> Increment</button>
            <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>

    )
}