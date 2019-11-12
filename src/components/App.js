import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchData } from "../common/utils"
import { actionCreators } from "../store/todo"
import "./App.css"
import { Header } from "./Header"
import { Todos } from "./Todos"

function App({ todos, error, updateTodos, setError }) {
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
    <div className="App">
      <Header />
      <Todos todos={todos} />
    </div>
  )
}
const mapStateToProps = ({ todos, error }) => ({ todos, error })
const mapDispatchToProps = {
  updateTodos: actionCreators.updateTodos.create,
  setError: actionCreators.setError.create,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
