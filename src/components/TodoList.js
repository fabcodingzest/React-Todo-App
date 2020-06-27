import React from 'react'
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import Todo from './Todo'
import '../styles/TodoList.css'

export default function TodoList({todos, setTodos}) {
  return (
      <TransitionGroup className="TodoList">
      {todos.map(todo => (
        <CSSTransition key={todo.id} timeout={500} classNames="todo">
        <Todo todo={todo} setTodos={setTodos} todos={todos} />
        </CSSTransition>
        )
      )}
      </TransitionGroup>
  )
}
