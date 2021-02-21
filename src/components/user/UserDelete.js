/* eslint-disable no-shadow */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import * as actions from "../../actions";
import DeleteButton from "../DeleteButton";

// eslint-disable-next-line no-shadow
const UserDelete = ({ token, userId, currentUsername, signOut, deleteUser }) => {
  const handleDelete = () => {
    deleteUser(userId, token);
    signOut();
  };

  const renderActions = () => {
    return (
      <div className="modal-actions">
        <DeleteButton handleDelete={handleDelete} />
        <Link className="ui inverted button primary" to={`/user/show/${userId}`}>
          Cancel
        </Link>
      </div>
    );
  };

  const renderContent = () => {
    if (!currentUsername) {
      return "Are you sure you want to delete this profile? You will lose all of your saved stock data. This action can not be reversed.";
    }
    return `Are you sure you want to delete the profile for ${currentUsername}? You will lose all of your saved stock data. This action can not be reversed.`;
  };

  return (
    <Modal
      data-test="component-user-delete"
      header="Delete Profile"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push(`/user/show/${userId}`)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.auth.token,
    userId: state.user.auth.userId,
    currentUsername: state.user.profile.username,
  };
};

export default connect(mapStateToProps, actions)(UserDelete);
