import React from "react"
import { useForm } from "../../../common/hooks"
import { initialState, onSubmit, validate } from "./utils"

const TodoForm = () => {
  const { handleSubmit, getFieldProps } = useForm({ initialState, onSubmit, validate })
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input {...getFieldProps("title")} />
      </div>
      <div>
        <label>Description</label>
        <input {...getFieldProps("description")} />
      </div>
      <button>Add Todo</button>
    </form>
  )
}
export default TodoForm
