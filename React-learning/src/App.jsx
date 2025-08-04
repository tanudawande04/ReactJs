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

  const rating = "20.2"
  const summarry = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In rntore illum perferendis quisquam neque consectetur, dolorum sed officiis porro unde numquam, beatae suscipit. Qui pariatur nam enim nesciunt."
  const greet = () => {
    const movie = "action";
    return movie;
  }
  let age = 20;

  //second method

  // let canWatch = "Not Avilable";
  // if (age >= 18) {
  //   canWatch = "Watch Now";
  // }

  //first method

  // if (18 > age) {
  //   return (
  //     <div>
  //       <div>
  //         <img src="https://images.pexels.com/photos/14756354/pexels-photo-14756354.jpeg?_gl=1*1poumws*_ga*MTc0ODI5NzIxMi4xNzUzODI0MzU4*_ga_8JE65Q40S6*czE3NTQyOTgwMTAkbzIkZzEkdDE3NTQyOTgyNTAkajQzJGwwJGgw" width={500} length={40} alt="" />
  //       </div>
  //       <h1>Name : {name}</h1> // values variables
  //       <h2>Age : {age}</h2>
  //       <h3>Rating : {20.2 / 2}</h3>    //variable-expression
  //       <h2>movie : {greet()}</h2>. // functional call
  //       <p> Summary : {summarry}</p>
  //       <button> Not applicable</button>

  //     </div>
  //   )                       
  //}

  //fourth method

  const canWatch = () => {
    if (age >= 18) return "wath Now";

    return "Not Avilable";
  }


  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/14756354/pexels-photo-14756354.jpeg?_gl=1*1poumws*_ga*MTc0ODI5NzIxMi4xNzUzODI0MzU4*_ga_8JE65Q40S6*czE3NTQyOTgwMTAkbzIkZzEkdDE3NTQyOTgyNTAkajQzJGwwJGgw" width={500} length={40} alt="" />
      </div>
      <h1>Name : {name}</h1> // values variables
      <h2>Age : {age}</h2>
      <h3>Rating : {20.2 / 2}</h3>    //variable-expression
      <h2>movie : {greet()}</h2> // functional call
      <p> Summary : {summarry}</p>
      <button>{canWatch()}</button>

      {/* third method */}

      {/* <button > {age >= 18 ? "watch now" : "Not aplicable"} </button> */}

    </div>
  )
}


//two rules in react 
//first - you dont return multiple eliemnets in react isilye ek div ke inside chize return krte hai.(or other methods se bhii krr skte h);
//second - jo closing tag nahi hai osme aapko closing manually lgana mendetory hai , like img tag.