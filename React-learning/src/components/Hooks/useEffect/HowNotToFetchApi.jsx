import { useEffect, useState } from "react"
import './Pokemon.css';

export const NotFetchapi = () => {
    const [apiData, setApiData] = useState(null);

    const Api = "https://pokeapi.co/api/v2/pokemon/pikachu";

    const fetchPokemon = () => {
        fetch(Api)
            .then((res) => (res.json()))
            .then((data) => {
                setApiData(data)
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchPokemon();

    }, []);

    console.log(apiData);

    if (apiData) {
        return (

            <div className="containet">
                <header>
                    <h1>Let's Catch pokemon</h1>
                </header>
                <ul className="card-demo">
                    <li className="pokemon-card">
                        <figure>
                            <img src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} className="pokemon-img" />


                        </figure>
                        <h1>{apiData.name}</h1>
                    </li>

                </ul>



            </div>

        )
    }

}
