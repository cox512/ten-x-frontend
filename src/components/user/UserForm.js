/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Button from "../Button";
import { renderInput } from "../../helpers/helpers";

// eslint-disable-next-line no-shadow
const UserForm = ({ handleSubmit, submitUser, buttonText, formHeader, currentUserAuth }) => {
  const onSubmit = (formValues) => {
    submitUser(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
      <h3 className="user-profile__header">{formHeader}</h3>
      <Field name="fname" type="text" component={renderInput} label="First Name" />
      <Field name="lname" type="text" component={renderInput} label="Last Name" />
      <Field name="username" type="text" component={renderInput} label="Username" />
      <Field name="email" type="text" component={renderInput} label="E-mail" />
      {!currentUserAuth ? (
        <Field name="password" type="password" component={renderInput} label="Password" />
      ) : null}
      <div className="user-create__btn">
        <Button type="submit" text={buttonText} />
      </div>
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
  return { currentUserAuth: state.user.auth.isSignedIn };
};

const formWrapped = reduxForm({ form: "userForm", validate })(UserForm);

export default connect(mapStateToProps)(formWrapped);
