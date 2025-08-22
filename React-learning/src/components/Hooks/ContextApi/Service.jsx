
import { useContext } from "react";
import { BioContext } from ".";

export const Service = () => {
    const { myName, myage } = useContext(BioContext)

    return (
        <div>
            <h1>hii (Service) Component , my name is {myName} and i am {myage} yrs old</h1>
        </div>
    );
}