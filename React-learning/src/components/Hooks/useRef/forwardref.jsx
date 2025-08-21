import { forwardRef, useRef, useId } from "react";

export const ForwardRefs = () => {

    const username = useRef(null);
    const password = useRef(null);

    const handleFormsubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }

    return (
        <form onSubmit={handleFormsubmit}>
            <BeforReactv19 label="usename" ref={username} />
            <BeforReactv19 label="password" ref={password} />

            <button>Submit</button>
        </form>

    );

}
//bydefault ref milta hai props.ref nii pass krte h , ande label jo  child component hai oper oska label milega
// const BeforReactv19 = forwardRef((props, ref) => {
//     const id = useId();
//     return (
//         <div>
//             <label htmlFor={id}>{props.label}</label>
//             <input type="text" ref={ref} />
//         </div>
//     )

// })


const BeforReactv19 = (props) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={props.ref} />
        </div>
    )

}

