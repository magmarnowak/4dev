import { actionCreators } from "./actionCreators"

const { setFieldValue, setErrors } = actionCreators

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case setFieldValue.type:
      return {
        ...state,
        values: {
          ...state.values,
          ...payload,
        },
      }
    case setErrors.type:
      return { ...state, errors: { ...payload } }
    default:
      return state
  }
}
