/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useCallback, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

// eslint-disable-next-line no-shadow
const UserForm = ({ handleSubmit, submitUser, buttonText }) => {
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
    submitUser(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="ui form error"
      data-test="component-user-create">
      <Field name="fname" type="text" component={renderInput} label="First Name" />
      <Field name="lname" type="text" component={renderInput} label="Last Name" />
      <Field name="username" type="text" component={renderInput} label="Username" />
      <Field name="email" type="text" component={renderInput} label="E-mail" />
      <Field name="password" type="password" component={renderInput} label="Password" />
      <button type="submit" className="ui button primary">
        {buttonText}
      </button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.lname) {
    errors.lname = "You must enter a last name";
  }
  if (!formValues.fname) {
    errors.fname = "You must enter a first name";
  }
  if (!formValues.username) {
    errors.username = "You must enter a username";
  }
  if (!formValues.email) {
    errors.email = "You must enter a email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  return errors;
};

const mapStateToProps = (state) => {
  // We'll be able to get rid of this 'users' object once we're connected to the backend
  return { users: Object.values(state.user) };
};
const formWrapped = reduxForm({ form: "userForm", validate })(UserForm);

export default connect(mapStateToProps, { fetchUsers })(formWrapped);
