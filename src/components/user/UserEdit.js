/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { editUser } from "../../actions";
import UserForm from "./UserForm";

const UserEdit = ({ editUser, currentUserId, currentUser }) => {
  const onSubmit = (formValues) => {
    editUser(currentUserId, formValues);
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
  };
};

export default connect(mapStateToProps, { editUser })(UserEdit);
