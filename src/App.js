import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css';

let todoObj = [{ task: "Go to hogwarts", id: uuid(), completed: false },
  { task: "Pick up potions from Professor", id: uuid(), completed: false },
  {task: "Meeting with Draco", id: uuid(), completed: false}]

function App () {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || todoObj)
  
  useEffect(() => {
    JSON.parse(localStorage.getItem('todos'))
  }, [])
  return (
    <>
      <h1 className="heading">React To-do App</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
