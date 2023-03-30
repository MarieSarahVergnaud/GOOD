
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

const pokemon = pokemonList[1]


function PokemonCard() {
        const stylefig ={
            display :"flex",
            flexDirection:"column",
            displayFlex:"center",
            alignItems:"center",

        }
        
    return (

             <figure style={stylefig}>

             {pokemon.imgSrc ? <img src={pokemon.imgSrc} />: <p>"mais ou est tu miaaa ?"</p>}
             <figcaption >{pokemon.name}</figcaption>
             {}

        </figure>
            );

}



export default PokemonCard;