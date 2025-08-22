import { Children, createContext } from 'react';
import { useContext } from 'react';

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





//Custom hook => alg alg context api create krke alag alag file m export krna and jaha use krna h waha import krke use krna
//agr ek hi context api h tohh usko ek file m create krke waha se export krke jaha use krna h waha import krke use krna
//isliye use krte hai qki aap har values ke liye baar baar useContext use na kro

//Custom Hook


export const useBioContext = () => {
    const context = useContext(BioContext)
    if (context === undefined) {
        throw new Error("aree baaba tumne usse biprovide ke bahar rkhaa hai naa ")
    }
    return context;

}