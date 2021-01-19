/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn, fetchUsers, fetchUser } from "../actions";
import Button from "./Button";

// eslint-disable-next-line no-shadow
const Login = ({ handleSubmit, fetchUser, fetchUsers, users, signIn }) => {
  // eslint-disable-next-line react/destructuring-assignment
  useEffect(() => {
    // Gathering all the users on load
    // This can be taken out once the client is connected to the server. This logic will be performed server-side.
    fetchUsers();
  }, []);

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
    // Compare login details with the list of created users and look for a match
    // This can be done on the back end once it's all connected
    const foundUser = users.find(
      (user) => user.username === formValues.username && user.password === formValues.password
    );

    if (!foundUser) {
      console.log("Not a valid user");
    } else {
      signIn(foundUser.id);
      fetchUser(foundUser.id);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error display">
      <Field name="username" type="text" component={renderInput} label="Username" />
      <Field name="password" type="password" component={renderInput} label="Password" />
      <div className="center">
        <p className="login__submission">
          <i>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?
            <Link to="/user/new"> Create one.</Link>
          </i>
        </p>
        <div className="center">
          <Button type="submit" text="Submit" />
        </div>
      </div>
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

// eslint-disable-next-line consistent-return
const mapStateToProps = (state) => {
  return {
    users: Object.values(state.user),
  };
};

const formWrapped = reduxForm({ form: "loginForm", validate })(Login);

export default connect(mapStateToProps, { signIn, fetchUsers, fetchUser })(formWrapped);
