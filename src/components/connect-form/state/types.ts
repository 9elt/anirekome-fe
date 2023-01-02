export interface formValues {
  user_name: string,
  policies: 0 | 1,
}

export interface formErrors {
  user_name: string,
  policies: string,
}

export interface formStateType {
  values: formValues,
  errors: formErrors,
  submitting: boolean,
}