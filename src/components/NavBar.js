/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Button from "./Button";
import UserAuth from "./user/UserAuth";

const NavBar = ({ currentUserId, currentUserName }) => {
  // console.log(currentUserId);
  const renderAcctButton = () => {
    if (currentUserId) {
      return (
        <Link to={`/user/show/${currentUserId}`} type="button" className="ui button primary">
          {currentUserName}
        </Link>
      );
    }
    return null;
  };

  return (
    <nav className="ui secondary pointing menu" data-test="component-navbar">
      <Link to="/" className="nav__logo">
        TEN-X
      </Link>
      <div className="right menu">
        <UserAuth />
        {currentUserId ? renderAcctButton() : null}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
    // Getting an undefined error here b/c there is no currentUser on loading. Should we have a value for all of these to start with?
    currentUserName: state.user.profile.fname,
  };
};
export default connect(mapStateToProps)(NavBar);
