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
//Dynamic values using.....
//variables
//expressions
//function call



const Thapatech = () => {
  const name = "tannu";     //Dynamic values using variables...
  const age = 21;
  const rating = "20.2"
  const summarry = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In rntore illum perferendis quisquam neque consectetur, dolorum sed officiis porro unde numquam, beatae suscipit. Qui pariatur nam enim nesciunt."
  const greet = () => {
    const movie = "action";
    return movie;
  }

  return (
    <div>
      <h1>Name : {name}</h1> // values variables
      <h2>Age : {age}</h2>
      <h3>Rating : {20.2 / 2}</h3>    //variable-expression
      <h2>movie : {greet()}</h2>. // functional call
      <p> Summary : {summarry}</p>

    </div>
  )
}


//two rules in react 
//first - you dont return multiple eliemnets in react isilye ek div ke inside chize return krte hai.(or other methods se bhii krr skte h);
//second - jo closing tag nahi hai osme aapko closing manually lgana mendetory hai , like img tag.