import { useState } from "react";


export const AddedTask = () => {

    const [users, setUsers] = useState([
        { name: " tannu", age: 21 },
        { name: "vivek", age: 23 },
        { name: "zzzzz", age: 24 },
        { name: "ssssss", age: 20 },
    ])
    return (

        <div>

            <ul>
                {users.map((currElem, idx) => {
                    return (
                        <li key={idx}>
                            {currElem.name} - {currElem.age} year old
                        </li>
                    );

                })}
            </ul>

        </div>

    );

};
