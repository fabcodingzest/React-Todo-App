import React from 'react'
import '../styles/Todo.css'


export default function Todo ({ todo,todos, setTodos }) {
  const handleDeleteTask = (e) => {
    e.preventDefault();
    const currentTodo = e.target.parentNode.parentNode;
    currentTodo.classList.add('removed-item')
    const newList = todos.filter(item => item.id !== todo.id);
    setTodos(newList);
  }
  const handleCompleteTask = (e) => {
    e.preventDefault();
    const newList = todos.filter(item => {
      if (item.id === todo.id) {
        item.completed = !todo.completed;
      }
      return item;
    })
    setTodos(newList)  
  }

  return (
    <div className="todo">
      <p style={{ textDecoration: `${todo.completed ? 'line-through' : ''}` }}>
        {todo.task}
      </p>
      <div className="actions">
        <span onClick={handleDeleteTask} role="img" aria-label="delete-button">❌</span>
        <span onClick={handleCompleteTask} role="img" aria-label="complete-button">✅</span>
      </div>
    </div>
  )
}
