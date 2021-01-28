/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchUser, editUser } from "../../actions";
import UserForm from "./UserForm";

const UserEdit = ({ editUser, fetchUser, currentUserId, currentUser }) => {
  // useEffect(() => {
  //   fetchUser(currentUser.username);
  // }, []);

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

export default connect(mapStateToProps, { editUser, fetchUser })(UserEdit);
