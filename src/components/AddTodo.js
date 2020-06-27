import React from 'react'
import '../styles/AddTodo.css'
import uuid from 'react-uuid'

export default function AddTodo ({ todos, setTodos }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.children[0].value.length > 0) {
      setTodos([...todos, { task: e.target.children[0].value, id: uuid(), completed: false }])
      localStorage.setItem('todos', JSON.stringify(todos))
      e.target.reset();
    }
  }

  return (
    <form className="AddTodo" onSubmit={handleSubmit}>
      <input type="text" className="addInput" placeholder="Enter a todo..." maxLength="50" />
      <button type="submit" className="button">Add</button>
    </form>
  )
}
