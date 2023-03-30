import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"
import { useState } from 'react';


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

 const [pokemonIndex, setIndex] = useState(0);

  const handleClick1 = () => {
    setIndex(pokemonIndex + 1)
  }
  const handleClick2 = () => {
    setIndex(pokemonIndex - 1)
  
  }

    return (

      <div>
        <MyTitle />
        
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <button onClick={handleClick1}>Suivant</button>
        <button onClick={handleClick2}>Retour</button>
      </div>
    );

};





export default App;
