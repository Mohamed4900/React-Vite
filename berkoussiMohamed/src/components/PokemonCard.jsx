import { useState } from "react";


function PokemonCard() {
const pokemonList = [
    {
        name: "Bulbasaur",
        type: "Plante/Poison",
        imgSrc: "https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png",
    },
    {
        name: "Charmander",
        type: "Feu",
        imgSrc: "https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png",
    },
]

const [pokemon, setPokemon] = useState(pokemonList[0]);
const changePokemon = () => {
    setPokemon(pokemonList[1]);
};
return (
    <div>
        <h1>{pokemon.name}</h1>
        <p>Type: {pokemon.type}</p>
        {pokemon.imgSrc ? (
            <img className="avatar" src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
            <p>???</p>
        )}
        <button onClick={changePokemon}>Change Pokemon !!!</button>
    </div>
);
}

export default PokemonCard;