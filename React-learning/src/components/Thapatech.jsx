import './Thapatech.css';
import SeriesData from '../api/SeriesData.json';
import { SeriesCards } from './SeriesCard';

const Thapatech = () => {


    // const name = "Lovely Runner";     //Dynamic values using variables...
    // const rating = "9.8"
    // const summarry = "Im Sol travels back in time to prevent the tragic fate of her favorite star, Ryu Sun Jae"
    // const greet = () => {
    //     const genre = "Romantic Comedy";
    //     return genre;
    // }
    //let age = 20;

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

    // const canWatch = () => {
    //     if (age >= 18) return "wath Now";

    //     return "Not Avilable";
    // }


    return (

        <ul>
            {SeriesData.map((currElem) => {

                return (

                    <SeriesCards key={currElem.id} data={currElem} />

                )

            })};
        </ul>


    )
}


export default Thapatech;


// /* <p> Age : {age}</p> */



// /* third method */

///* <button > {age >= 18 ? "watch now" : "Not aplicable"} </button> */

//two rules in react 
//first - you dont return multiple eliemnets in react isilye ek div ke inside chize return krte hai.(or other methods se bhii krr skte h);
//second - jo closing tag nahi hai osme aapko closing manually lgana mendetory hai , like img tag.