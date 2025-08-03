//components - it is a function or class  which is returns jsx 
// it is two rules it can not return multiple values ,so using components in 

//fragments 
//calling components in single parent div in multiple times 

import React, { Fragment } from "react" // if React.fragment nahi likh rhe hoo tohh yaa direct fregment ni likh ke <> </> y bhi sort h syntax


export const App = () => {

    // return ([<Thapatech key="1" />, <Thapatech key="2" />] // one method Arrays with keys  eliminate extra div 

    return (
        <Fragment>
            <Thapatech />
            <Thapatech />
            <Thapatech />
            <Thapatech />
        </Fragment>


    );
};

export default App;

const Thapatech = () => {
    return (
        <h1>tanu</h1>
    );
};