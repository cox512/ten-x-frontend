/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchUser, editUser } from "../../actions";
import UserForm from "./UserForm";

const UserEdit = ({ editUser, fetchUser, currentUserId, currentUser }) => {
  useEffect(() => {
    fetchUser(currentUserId);
  }, []);

  const onSubmit = (formValues) => {
    editUser(currentUserId, formValues);
    // console.log(formValues);
  };

  return (
    <div data-test="component-user-edit">
      <h3>Edit Your Profile</h3>
      <UserForm
        initialValues={_.pick(currentUser, "fname", "lname", "username", "email", "password")}
        submitUser={onSubmit}
        buttonText="Edit Profile"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
    currentUser: state.user.profile,
  };
};

export default connect(mapStateToProps, { editUser, fetchUser })(UserEdit);
