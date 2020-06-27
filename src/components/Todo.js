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

  const handleEditTask = (e) => {
    e.preventDefault();
    const newList = todos.filter(item => {
      if (item.id === todo.id) {
        item.editing = !todo.editing;
      }
      return item;
    })
    setTodos(newList)  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVal = e.target.taskInput.value;
    const newList = todos.filter(item => {
      if (item.id === todo.id) {
        item.task = newVal;
        item.editing = false;
      }
      return item;
    })
    setTodos(newList)  
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    let newTask = e.target.value;
    let todoTask = e.target.closest('.edit').previousElementSibling.children[0];
    todoTask.textContent = newTask;
    
  }

  return (
    <div className="todo">
      <div className="non-edit">
        <p style={{ textDecoration: `${todo.completed ? 'line-through' : ''}` }}>
          {todo.task}
        </p>
        <div className="actions">
          <span onClick={handleDeleteTask} role="img" aria-label="delete-button">❌</span>
          <span onClick={handleCompleteTask} role="img" aria-label="complete-button">✅</span>
          <span onClick={handleEditTask} role="img" aria-label="edit-button">📝</span>
        </div>
      </div>
      <div className="edit" style={{display: `${todo.editing ? 'flex': 'none'}`}}>
        <form action="" onSubmit={handleSubmit} name="editForm">
          <input onChange={handleInputChange} type="text" className="edit-input" defaultValue={todo.task} name="taskInput"/>
          <button type="submit" className="save-btn" name="save">Save</button>
        </form>
      </div>
    </div>
  )
}
