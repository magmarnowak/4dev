import React, { useContext } from "react";
import { FormContext } from "../../../common/hooks";

const TodoForm = () => {
  const { state, handleSubmit, getFieldProps } = useContext(
    FormContext
  );
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input {...getFieldProps("title")} />
        {state.errors.title==="require" && (
        <div style={{ color: "red", fontSize: "16px" }}>This field is required</div>
      )}
      </div>
      <div>
        <label>Description</label>
        <input {...getFieldProps("description")} />
      </div>
      <button>Add Todo</button>
    </form>
  );
};
export default TodoForm;
