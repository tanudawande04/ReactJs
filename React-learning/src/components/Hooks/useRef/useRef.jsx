import { useRef } from 'react';
import './useref.css';
export const UserefHook = () => {


    // const username = document.getElementById("username");
    // const password = document.getElementById("password");


    const username = useRef(null);
    const password = useRef(null);

    console.log(username);


    const handleFormsubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);

    };

    return (
        <>
            <form onSubmit={handleFormsubmit}>
                <input type="text" id="username" ref={username} />
                <br />
                <input type="text" id="password" ref={password} />
                <br />
                <button >Submit</button>

            </form>
        </>
    )

}