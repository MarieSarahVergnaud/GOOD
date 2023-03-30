function PokemonCard() {

        const stylefig ={
            display :"flex",
            flexDirection:"column",
            displayFlex:"center",
            alignItems:"center",

        }
        
    return (
             <figure>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
            <figcaption style={stylefig}>bulbasaur</figcaption>
        </figure>
            );

}
export default PokemonCard;