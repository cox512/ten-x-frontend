/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import UserForm from "./UserForm";

// eslint-disable-next-line no-shadow
const UserCreate = ({ createUser }) => {
  const onSubmit = (formValues) => {
    createUser(formValues);
  };

  return (
    <div className="user-create display">
      <h3 className="user-create__header">Create Your Account</h3>
      <UserForm submitUser={onSubmit} buttonText="Create Profile" />
    </div>
  );
};

export default connect(null, actions)(UserCreate);
