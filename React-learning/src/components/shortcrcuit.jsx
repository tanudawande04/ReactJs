import { useState } from "react";

const Shortcircuit = () => {

    const [isLoggedin, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("");
    return (
        <div>
            <h1>hii my name is tannu , and im from betul</h1>
            {isLoggedin && < p > You are logged in !</p>}

            {user ? `hii${user}` : "plzz login !"}

            <div>
                <button onClick={() => setIsLoggedIn(!isLoggedin)}>Toggle login state</button>
                <button onClick={() => setUser("hii wlcm to tanus website")}>set user</button>
                <button onClick={() => setUser("")}>clear user</button>
            </div>
        </div >
    )
}

export default Shortcircuit;