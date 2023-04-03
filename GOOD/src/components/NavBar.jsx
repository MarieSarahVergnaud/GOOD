
import { useState } from 'react';
import React from 'react';
import PokemonCard from './PokemonCard';


function NavBar ({pokemonIndex, pokemonList, setPokemonIndex}) { 

//   const handlePrevious = () => {
//     setPokeIndex(pokeIndex - 1)

// }
// const handleNext = () => {
//     setPokeIndex(pokeIndex + 1)
// }


  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
};

    return (


    <div>

      <ul>
        {pokemonList.map ((pokemon, index) => (
          <button key={index} onClick = {() => handlePokemonClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </ul>
    
    </div>
        
    )
};

export default NavBar