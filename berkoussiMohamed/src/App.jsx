import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"

function App() {
  const pokemonList = [
    {
      name: "Bulbasaur", 
      type: "Plante/Poison",
      imgSrc: "https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png",
    },
    {
      name: "meow",
    },
  ];

  const pokemon = pokemonList[0]
  return <PokemonCard pokemon={pokemon}/>
};

export default App;
