import axios from "axios"
import React, {useEffect, useState} from 'react'


function Pokemon(props) {
  const { name } = props.match.params
  console.log(name)
  const [pokemon, setPokemon] = useState({})


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemon(res.data)
    })
  }, [name])

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites?.front_default} />
    </div>
  )
}

export default Pokemon