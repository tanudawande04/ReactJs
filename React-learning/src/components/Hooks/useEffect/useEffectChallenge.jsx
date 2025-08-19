import { useEffect, useState } from 'react';
import './index.css'
export const UseEffectChallange = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `count : ${count}`

    }, [count]);   // arraydependecy me pass krte hai then useeefect perticular tital wale function callback ko call krega then values update hogiiiii

    useEffect(() => {
        console.log(name);

    }, [name]); // aapko state variable pass krke batana hoga k jb jb state variable ki value change hogii useeffect tab tab call hogaaaaa isiliye array depndeciy me isee pass krna hota hai...

    return (
        <div>
            <h1>UseEffect Challange</h1>
            <p>count:{count}</p>
            <button onClick={() => setCount(count + 1)}>change</button>
            <p>Name : {name}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        </div>
    );
}

