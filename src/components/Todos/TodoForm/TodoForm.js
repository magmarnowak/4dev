import React, { useContext } from "react"
import { FormContext } from "../../../common/hooks"

const TodoForm = () => {
  const { handleSubmit, getFieldProps } = useContext(FormContext)
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
