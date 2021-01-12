/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { createUser, fetchUsers } from "../../actions";
import UserForm from "./UserForm";

// eslint-disable-next-line no-shadow
const UserCreate = ({ createUser }) => {
  const onSubmit = (formValues) => {
    createUser(formValues);
  };

  return (
    <div>
      <h3>Create Your Account</h3>
      <UserForm submitUser={onSubmit} buttonText="Create Profile" />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { users: Object.values(state.user) };
// };

export default connect(null, { createUser, fetchUsers })(UserCreate);
