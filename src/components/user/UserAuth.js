/* eslint-disable no-else-return */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn, signOut } from "../../actions";

// eslint-disable-next-line no-shadow
const UserAuth = ({ isSignedIn, signOut }) => {
  const onSignOutClick = () => {
    signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn) {
      return (
        <Link to="/" className="ui button primary" onClick={onSignOutClick}>
          Log Out
        </Link>
      );
    } else {
      return (
        <Link to="/login" className="ui button primary">
          Log In
        </Link>
      );
    }
  };

  return <div data-test="component-user-auth">{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(UserAuth);
