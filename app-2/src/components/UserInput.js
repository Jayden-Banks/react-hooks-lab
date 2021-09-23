import React, { useState } from 'react'

function UserInput({ pokemonSetter }) {
  const [userSearch, setUserSearch] = useState('')


  const changeHandle = input => {
    setUserSearch(input)
  }

  const submitHandle = e => {
    e.preventDefault()
    pokemonSetter(userSearch)
    setUserSearch('')

  }


  return (
    <div id="div-user-input">
      <form onSubmit={submitHandle}>
        Pokemon search <input type="text" value={userSearch} id="input-pokemon" onChange={(e) => changeHandle(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default UserInput