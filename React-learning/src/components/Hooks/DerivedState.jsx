import { useState } from "react";

export const DerivedState = () => {

    const [users, userState] = useState([
        { name: " tannu", age: 21 },
        { name: "vivek", age: 23 },
        { name: "zzzzz", age: 24 },
        { name: "ssssss", age: 20 },
    ])
    console.log(users);

    const userCount = users.length;  // derived variables jisme ye actual value as an props lete hai...
    const average = users.reduce((acc, curr) => acc + curr.age, 0) / userCount;
    return (
        <div>

            <h2>userCount - {userCount}</h2>
            <ul>

                {users.map((currElem, idx) => {
                    return (
                        <li key={idx}>
                            {currElem.name} - {currElem.age}
                        </li>

                    )
                })}


            </ul>

            <h1>average-{average}</h1>
        </div>

    )

};

