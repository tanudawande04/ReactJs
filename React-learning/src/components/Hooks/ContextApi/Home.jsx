// import { useContext } from "react";
// import { BioContext } from ".";

import { useBioContext } from ".";

export const Home = () => {
    // const { myName, myage } = useContext(BioContext)
    const { myName, myage } = useBioContext();

    return (
        <div>
            <h1>hii  Home Component , my name is {myName} and i am {myage} yrs old</h1>
        </div>
    );
}

