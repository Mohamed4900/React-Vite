import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    }
  ];



function App() {
  const [index, setIndex] = useState(0);
  let pokemon = pokemonList[index];
  const toPokemon = (newindex) => {
    setIndex(newindex);
  }
  return (
    <div className="App">
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc}/>
      {pokemonList.map((pokemon, number) => (
          <NavBar toPokemon={() => toPokemon(number)} key={number} name={pokemon.name}/>
        ))}
    </div>
  )
}

export default App;
