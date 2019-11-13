import { ActionFactory } from "../../common/utils"

export const actions = {
  fetchTodos: ActionFactory("TODO_FETCH_TODOS"),
  updateTodos: ActionFactory("TODO_UPDATE_TODOS"),
  setError: ActionFactory("TODO_SET_ERROR"),
}
