import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchData } from "../../common/utils"
import { actions } from "../../store/todo"
import { TodoForm } from "./TodoForm"
import { Form } from "../../common/hooks"
import { initialState, onSubmit, validate } from "./TodoForm/utils"

const Todos = ({ todos, updateTodos, setError }) => {
  useEffect(() => {
    fetchData("todos")
      .then(todos => {
        updateTodos(todos)
      })
      .catch(({ message }) => {
        setError(message)
      })
  }, [updateTodos, setError])
  return (
    <div>
      {todos.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
      <Form {...{ initialState, onSubmit, validate }}>
        <TodoForm />
      </Form>
    </div>
  )
}
const mapStateToProps = ({ todos, error }) => ({ todos, error })
const mapDispatchToProps = {
  updateTodos: actions.updateTodos.create,
  setError: actions.setError.create,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos)
