import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Logo from './components/Logo';

function App() {
 
  const [pokemonIndex, setPokemonIndex] = useState(0);


  const pokemonList = [{
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
  


  useEffect(
    () => {
      window.alert("hello pokemon trainer :) ");
      (pokemonList [pokemonIndex].name ==="pikachu")? alert ("pika pika !"): "";
    },
   [pokemonIndex]  
  );
 
  
  return (

    <div className="app">
      <div className="header">


       
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
      <PokemonCard props = {pokemonList[pokemonIndex]} />
   
      <Logo />
      </div>
      ;
      </div>
  );
}

export default App;
