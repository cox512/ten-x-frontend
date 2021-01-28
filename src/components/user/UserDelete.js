/* eslint-disable no-shadow */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchUser, deleteUser, signOut } from "../../actions/index";

// eslint-disable-next-line no-shadow
const UserDelete = ({ currentUserId, currentUsername, signOut, deleteUser, fetchUser }) => {
  // You may want to keep this
  useEffect(() => {
    fetchUser(currentUserId);
  }, []);

  const handleDelete = (id) => {
    deleteUser(id);
    signOut();
  };
  const renderActions = () => {
    return (
      <div className="user-delete">
        <button
          className="ui inverted button negative"
          type="button"
          onClick={() => handleDelete(currentUserId)}>
          Delete
        </button>
        <Link className="ui inverted button primary" to={`/user/show/${currentUserId}`}>
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
      onDismiss={() => history.push(`/user/show/${currentUserId}`)}
    />
  );
};

const mapStateToProps = (state) => {
  return { currentUserId: state.user.auth.userId, currentUsername: state.user.profile.username };
};

export default connect(mapStateToProps, { fetchUser, deleteUser, signOut })(UserDelete);
