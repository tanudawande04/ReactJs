import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
    const { myName, myage } = useContext(BioContext)

    return (
        <div>
            <h1>hii  Home Component , my name is {myName} and i am {myage} yrs old</h1>
        </div>
    );
}