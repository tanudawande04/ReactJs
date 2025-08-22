
import { useContext } from "react";
import { BioContext } from ".";

export const About = () => {
    const { myName, myage } = useContext(BioContext)

    return (
        <div>
            <h1>hii (About) Component , my name is {myName} and i am {myage} yrs old</h1>
        </div>
    );
}