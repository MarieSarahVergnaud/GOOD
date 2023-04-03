
function PokemonCard({ props }) {
    const { name, imgSrc, icon } = props 
   
    const card = {
        display: "flex",
        flexDirection: "column",
        displayFlex: "center",
        alignItems: "center",
        borderRadius: "15px",
        backgroundColor: "black",
        marginTop: "20px",
    }

    const stylename = {
        color: "white",
        fontSize: "50px"
    }

// const handleClick = (event) => 
//     console.log(event.target)
// }


/*STATE*/

    return (

        <figure style={card}>
{/*PROPS*/}

            {props.imgSrc ? <img src={props.imgSrc} /> : <p>"mais ou est tu miaaa ?"</p>}
            <figcaption >
           <h2 style={stylename}>{props.name}</h2>
{/*PROPS*/}


{/*STATE*/}
 

            </figcaption>
{/*STATE*/}

        </figure>
    )

}



export default PokemonCard;