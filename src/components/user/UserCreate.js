/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useCallback, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createUser, fetchUsers, fetchUser } from "../../actions";

// eslint-disable-next-line no-shadow
const UserCreate = ({ handleSubmit, createUser, isSignedIn }) => {
  const [userCreated, setUserCreated] = useState(false);

  useEffect(() => {
    // I need the ID of the user that was just created.
  }, [userCreated]);
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

  const onSubmit = async (formValues) => {
    const response = await createUser(formValues);

    console.log("response:", response);
    console.log(isSignedIn);
    // Do we want an isSignedIn state?
    // If user is successfully created
    //    Log User in
    //    Return User to homescreen
    // Else, if there was an error
    //    Let the user know
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
        Create Account
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

const mapStateToProps = (state, ownProps) => {
  // console.log("ownProps:", ownProps);
  return { users: Object.values(state.user), isSignedIn: state.auth.isSignedIn };
};
const formWrapped = reduxForm({ form: "createUserForm", validate })(UserCreate);

export default connect(mapStateToProps, { createUser, fetchUsers })(formWrapped);
