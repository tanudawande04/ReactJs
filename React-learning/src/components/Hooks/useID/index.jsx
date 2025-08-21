import { useId } from "react"

export const UseId = () => {



    // const userId = useId();
    // const emaiIid = useId();

    // //evertime found diffrent different ids or unique ids....(useId() -> use krte hai qki manual id ke bajay aap react ki provided id use kr skte hoo it's best way to write code).
    // return (
    //     <form >
    //         <div>
    //             <label htmlFor={userId}>Username</label>
    //             <input type="text" id={userid} name="name" />

    //         </div>

    //         <div>
    //             <label htmlFor={emailId}>Email :</label>
    //             <input type="email" id={emailid} name="email" />
    //         </div>

    //         <button>Submit</button>
    //     </form>
    // )




    // This lets you avoid calling useId for every single element that needs a unique Id.

    const id = useId();


    return (

        <form >
            <div>
                <label htmlFor={id + "usernameId"}>Username</label>
                <input type="text" id={id + "usernameId"} name="name" />

            </div>

            <div>
                <label htmlFor={id + "emailId"}>Email :</label>
                <input type="email" id={id + "emailId"} name="email" />
            </div>

            <button>Submit</button>
        </form>
    )

}