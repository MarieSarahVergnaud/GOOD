import './App.css'
import Title from './components/Title'
import PokemonCard from "./components/PokemonCard"
import SayHello from './components/SayHello'


function App() {


  return (
    
    <div className="app">

      <div className="header"> {/* -- HEADER START-- */}
        <a href="https://www.pokemon.com/fr" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" className="logo" alt="Vite logo" />
        </a>

        <Title />
        
        <a href="https://reactjs.org" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_VruBAO391MxCTbu7IvYLRSHq-jYHN6C4g&usqp=CAU" className="logo react" alt="React logo" />
        </a>
      </div> {/* -- HEADER END -- */}
   
      <PokemonCard />
      <SayHello />
      
    </div>
  )
}

export default App
