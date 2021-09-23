
function List({ list }) {
  


  const displayList = () => {
    const newList = list.map((element, index)=> {
      return <h3 className="h2-todo-item" key={index}>{element}</h3>
    })
    return newList
  }



  return (
    <div id="div-todo">
      <h2 id="h2-todo-list">Here is your To-do list</h2>
      {displayList()}
    </div>
  )
}

export default List