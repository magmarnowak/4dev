import { actions } from "./actions"
const { updateTodos, setError } = actions

const initialState = {
  todos: [],
  error: "",
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case updateTodos.type:
      return {
        ...state,
        todos: payload,
      }
    case setError.type:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
