//conditional values in jsx..

const Thapatech = () => {
    const name = "tannu";     //Dynamic values using variables...
    const age = 20;
    const rating = "20.2"
    const summarry = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In rntore illum perferendis quisquam neque consectetur, dolorum sed officiis porro unde numquam, beatae suscipit. Qui pariatur nam enim nesciunt."
    const greet = () => {
        const movie = "action";
        return movie;
    }
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
    // } 

    //second method
    // let caNwatch = "Not Aviable";
    // if (18 >= age) { caNwatch = "watch Now" };

    const canWatch = () => {
        if (age >= 18) {
            "wath Now"
        }
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
            {/* third method */}
            {/* <button > {age >= 18 ? "watch now" : "Not aplicable"}</button> */}
            <button>{canWatch()}</button>

        </div>
    )
}
//three tarike..
//1.do overall code 
//2.inline buttons wala
//3.variables wala


//two rules in react 
//first - you dont return multiple eliemnets in react isilye ek div ke inside chize return krte hai.(or other methods se bhii krr skte h);
//second - jo closing tag nahi hai osme aapko closing manually lgana mendetory hai , like img tag.