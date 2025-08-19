import { useState } from "react"


export const RegistrationForm = () => {
    const [isAgreed, setIsAgreed] = useState(false);

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",

    });


    const hadleInpuChange = (e) => {

        const { name, value } = e.target;

        setUser((prev) => ({ ...prev, [name]: value }));



    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);


        // const formData = {
        //     firstname,
        //     lastname,
        //     email,
        //     password,
        //     phone,
        // };
        // console.log(formData);


    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <h1>Sign Up</h1>
                    <p>please fill this form to create an account</p>

                    <label htmlFor="firstname">
                        <b>FirstName</b>
                    </label>

                    <input type="text" name="firstname" placeholder="Enter first name" value={user.firstname} onChange={hadleInpuChange} required />

                    <label htmlFor="lastname">
                        <b>LastName</b>
                    </label>

                    <input type="text" name="lastname" placeholder="Enter last name" value={user.lastname} onChange={hadleInpuChange} required />


                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text" name="email" placeholder="Enter a mail" value={user.email} onChange={hadleInpuChange} required />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="text" name="password" placeholder="Enter a password" value={user.password} onChange={hadleInpuChange} required />


                    <label htmlFor="phone">
                        <b>Phone</b>
                    </label>
                    <input type="phone" name="phone" placeholder="9867492010" value={user.phone} onChange={hadleInpuChange} required />

                    <p>
                        <input
                            type="checkbox"
                            id="agree"
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                            style={{ marginRight: "5px" }} //gap
                        />
                        By creating our account you agree to our
                        <a href="#" style={{ marginLeft: "5px" }}>Terms and Conditions</a>
                    </p>


                    <div>
                        <button type="submit"> Sign up</button>
                    </div>

                </div>
            </form>

        </>
    )

}