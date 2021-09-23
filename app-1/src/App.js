import './App.css';
import List from "./components/List";
import React, { useState } from 'react'
import AddTodo from './components/AddTodo';

function App() {
  const [list, setList] = useState(['red', 'blue'])

  const listSetter = input => {
    setList(input)
  }


  return (
    <div className="App">
      <List list={list}/>
      <AddTodo list={list} listSetter={listSetter}/>
    </div>
  );
}

export default App;
