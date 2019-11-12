export const initialState = {
  values: {
    title: "",
    description: "",
  },
  errors: {},
}
export const onSubmit = values => {
  console.log(values)
}
export const validate = values => {
  const required = ["title"]
  return required.reduce((acc, curr) => (values[curr] ? acc : { ...acc, [curr]: "require" }), {})
}
