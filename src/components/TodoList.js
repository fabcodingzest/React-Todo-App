import React from 'react'
import Todo from './Todo'
import '../styles/TodoList.css'
export default function TodoList({todos, setTodos}) {
  return (
    <div className="TodoList">
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
      })}
    </div>
  )
}
