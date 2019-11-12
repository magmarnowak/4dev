import React from "react"
import { TodoForm } from "./TodoForm"

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
      <TodoForm />
    </div>
  )
}
export default Todos
