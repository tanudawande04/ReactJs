import { useEffect, useState } from "react"
import './Pokemon.css';

export const NotFetchapi = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const Api = "https://pokeapi.co/api/v2/pokemon/pikachu";

    const fetchPokemon = () => {
        fetch(Api)
            .then((res) => (res.json()))
            .then((data) => {
                setApiData(data)
                setLoading(false);      //promise ke through data handled hai.....
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchPokemon();

    }, []);

    console.log(apiData);

    if (loading) {
        return (
            <div>
                <h1>Loading.....</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h1>Error : {error.message}</h1>
            </div>
        )
    }

    //if (apiData) {
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
                    <div className="greed-three-cols">
                        <p className="pokemon-info">
                            Weight : <span>{apiData.weight}</span>

                        </p>

                        <p className="pokemon-info">
                            Height : <span>{apiData.height}</span>

                        </p>

                        <p className="pokemon-info">
                            speed : <span>{apiData.stats[5].base_stat}</span>
                        </p>
                    </div>
                </li>

            </ul>



        </div>

    )
}


