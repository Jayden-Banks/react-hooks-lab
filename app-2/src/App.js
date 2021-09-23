import { useState } from 'react';
import './App.css';
import axios from 'axios'
import UserInput from './components/UserInput';
import SetPokemon from './components/SetPokemon';

function App() {
  // const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState('')

  const pokemonSetter = async newPokemon => {

    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`)
      setPokemon(res.data)
      // setLoading(false)
    }
    catch (err) {
      console.log(err)
      setPokemon('')
    }
  }



  return (
    <div className="App">
      <SetPokemon pokemon={pokemon}/>
      {/* <SetPokemon pokemon={pokemon}  loading={loading}/> */}
      <UserInput pokemonSetter={pokemonSetter}/>
    </div>
  );
}

export default App;
