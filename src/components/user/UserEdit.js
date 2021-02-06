/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import * as actions from "../../actions";
import UserForm from "./UserForm";

const UserEdit = ({ editUser, currentUserId, currentUser, token }) => {
  const onSubmit = (formValues) => {
    editUser(currentUserId, formValues, token);
  };

  return (
    <div className="user-profile display" data-test="component-user-edit">
      <UserForm
        initialValues={_.pick(currentUser, "fname", "lname", "username", "email", "password")}
        formHeader="Account Details"
        submitUser={onSubmit}
        buttonText="Edit Profile"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUserId: state.user.auth.userId,
    currentUser: state.user.profile,
    token: state.user.auth.token,
  };
};

export default connect(mapStateToProps, actions)(UserEdit);
