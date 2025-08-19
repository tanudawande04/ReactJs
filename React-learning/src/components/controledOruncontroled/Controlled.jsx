import { useState } from "react";

export const Controlled = () => {

    const [name, setNmae] = useState("");

    const handleChange = (e) => {
        setNmae(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //     // console.log(event);
        //     // const dataname = document.querySelector("#inputName").value.  //  (Uncontrolled me...)
        //     // console.log(dataname);
        console.log(name);


    }


    return (
        <section>
            <h1>Controlled Component</h1>
            <form onSubmit={handleSubmit}>
                <label >
                    Name :
                    <input id="inputName" name="name" type="text" value={name} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">submit</button>
            </form>
        </section>
    )
}