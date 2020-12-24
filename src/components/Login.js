/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from "react";
import { Field, reduxForm } from "redux-form";

const Login = ({ handleSubmit }) => {
  // eslint-disable-next-line consistent-return
  const renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div>{error}</div>
        </div>
      );
    }
  };
  const renderInput = useCallback(({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input type={type} {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  }, []);

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
      <Field name="username" type="text" component={renderInput} label="Username" />
      <Field name="password" type="password" component={renderInput} label="Password" />
      <button type="submit" className="ui button primary">
        Submit
      </button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "You must enter a username";
  }
  if (!formValues.password) {
    errors.password = "you must enter a password";
  }
  return errors;
};

export default reduxForm({ form: "loginForm", validate })(Login);
