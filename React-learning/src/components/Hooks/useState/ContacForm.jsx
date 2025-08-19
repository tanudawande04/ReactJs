import { useState } from "react"

export const ContactForm = () => {

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        message: "",

    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value, }));

    }

    const handleForm = (e) => {
        e.preventDefault();
        // const userData = {
        //     username,
        //     password,
        //     email,
        //     message,
        // }
        console.log(user);



    }

    return (
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>

                <form onSubmit={handleForm}>
                    <label htmlFor="username">Usename</label>
                    <input type="text" name="username" required autoComplete="off" value={user.username} onChange={handleInput} />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required autoComplete="off" value={user.email} onChange={handleInput} />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required autoComplete="off" value={user.password} onChange={handleInput} />


                    <label htmlFor="message">Message</label>
                    <textarea type="password" name="message" required autoComplete="off" rows="6" value={user.message} onChange={handleInput}></textarea>

                    <button type="submit">Send message</button>


                </form>
            </div>

        </div>
    )
}