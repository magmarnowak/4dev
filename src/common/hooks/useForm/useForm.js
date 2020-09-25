import { useReducer, useEffect } from "react";
import { reducer, actions } from "./store";

const {
  setFieldValue,
  setFieldTouched,
  submitAttempt,
  submitSuccess,
  submitFailure,
  setErrors,
} = actions;

export const useForm = ({ initialState, onSubmit, validate }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch(setErrors.create({}));
  }, []);
  const handleChange = (fieldName) => (e) => {
    e.persist();
    dispatch(
      setFieldValue.create({
        [fieldName]: e.currentTarget.value,
      })
    );
    dispatch(setErrors.create({}));
  };
  const handleBlur = (fieldName) => (e) => {
    e.persist();
    dispatch(setFieldTouched.create(fieldName));
  };
  const getFieldProps = (fieldName) => ({
    name: fieldName,
    value: state.values[fieldName],
    onChange: handleChange(fieldName),
    onBlur: handleBlur(fieldName),
    onInput: handleChange(fieldName),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitAttempt.create());
    const errors = validate(state.values);
    if (!Object.keys(errors).length) {
      try {
        await onSubmit(state.values);
        dispatch(submitSuccess.create());
      } catch (submitError) {
        dispatch(submitFailure.create(submitError));
      }
    } else {
      dispatch(setErrors.create(errors));
      dispatch(submitFailure.create());
    }
  };
  return {
    state,
    getFieldProps,
    handleSubmit,
  };
};
