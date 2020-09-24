import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../common/utils";
import { actions } from "../../store/todo";
import { TodoForm } from "./TodoForm";
import { Form } from "../../common/hooks";
import { initialState, onSubmit, validate } from "./TodoForm/utils";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    fetchData("todos")
      .then((todos) => {
        dispatch(actions.updateTodos.create(todos));
      })
      .catch(({ message }) => {
        dispatch(actions.setError.create(message));
      });
  }, [dispatch]);

  return (
    <div>
      {todos.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
      <Form {...{ initialState, onSubmit, validate }}>
        <TodoForm />
      </Form>
      <div style={{ color: "red" }}>{error}</div>
    </div>
  );
};
