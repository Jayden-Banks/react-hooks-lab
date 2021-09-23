import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function ApiCaller() {
  const [loading, setLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState([])

  const call = async () => {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      console.log(res.data)
      setPokemonList(res.data.results)
      setLoading(false)

    } catch (err) {
      console.log(err);
    }
  };


  const display = () => {
    const displayArr = pokemonList.map((element, index) => {
      return (
        <div className="div-pokemonList-pokemon" key={index}>
          <Link key={index} to={`/pokemon/${element.name}`}>
            <h3 className="h3-pokemonList-pokemon">{element.name}</h3>
          </Link>
        </div>
      )
    })
    return displayArr
  }
  
  useEffect(() => {
    call()
  }, [])


  return (
    <div id="div-pokemonList">
      {loading ? <h2>Loading</h2> : display()}
    </div>
  )
}

export default ApiCaller;
