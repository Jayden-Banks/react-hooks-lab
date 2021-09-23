import { useState } from "react"

function SetPokemon({ pokemon, loading }) {

  // const loadingDisplay = <h2>Loading</h2>

  const Display = () => {
    console.log(pokemon)
    if(pokemon.sprites) {
      const image = pokemon.sprites.front_shiny,
      name = pokemon.species.name,
      height = pokemon.height,
      ability1 = pokemon.abilities[0].ability.name,
      ability2 = pokemon.abilities[1].ability.name
      
    return  (
      <>
        <img src={image} alt="a Pokemon" />
        <div id="div-pokemon-bio">
          <p> name:  {name} <br></br>
            height: {height} <br></br>
            ability 1: {ability1} <br></br>
            ability 2: {ability2} <br></br>
          </p>
        </div>
      </>
    )
    } else {
      return (
        <>
          <h2>Choose a Pokemon</h2>
        </>
      )
    }
  }

  return (
    <div id="div-pokemon-image">
      <Display />
    </div>
  )
}

export default SetPokemon