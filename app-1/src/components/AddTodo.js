import { useState } from "react"


function AddTodo({ list, listSetter }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newList = [...list, input]
    listSetter(newList)
    setInput('')
  }

  return (
    <div id="div-add">
      <form onSubmit={handleSubmit}>
        Add item to list<input type="text" value={input} id="input-todo" onChange={(e) => setInput(e.target.value)}/>
        <button id="button-add-item">Add</button>
      </form>
    </div>
  )
}
export default AddTodo