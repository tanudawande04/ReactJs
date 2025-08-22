import { Children, createContext } from 'react';

//1-step create context
export const BioContext = createContext();

//2-step create provider

export const BioProvider = ({ children }) => {
    const myName = "tannu";
    const myage = 21;
    console.log(children);

    return (
        <BioContext.Provider value={{ myName, myage }}>{children}
        </BioContext.Provider>
    )

}