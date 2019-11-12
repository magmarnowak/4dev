import React, { createContext } from "react"
import { useForm } from "./useForm"

export const FormContext = createContext(null)

export default ({ children, ...initFormProps }) => {
  const ctx = useForm(initFormProps)
  return <FormContext.Provider value={ctx}>{children}</FormContext.Provider>
}
