import { ActionFactory } from "../../../utils"

export const actionCreators = {
  setFieldValue: ActionFactory("FORM_SET_FIELD_VALUE"),
  setFieldTouched: ActionFactory("FORM_SET_FIELD_TOUCHED"),
  submitAttempt: ActionFactory("FORM_SUBMIT_ATTEMPT"),
  submitSuccess: ActionFactory("FORM_SUBMIT_SUCCESS"),
  submitFailure: ActionFactory("FORM_SUBMIT_FAILURE"),
  setErrors: ActionFactory("FORM_SET_ERRORS"),
}
