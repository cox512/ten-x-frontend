/* eslint-disable no-else-return */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn, signOut } from "../../actions";
// import Button from "../Button";

const UserAuth = ({ isSignedIn }) => {
  // eslint-disable-next-line react/destructuring-assignment

  // const onAuthChange = (isSignedIn) => {
  //   if (isSignedIn) {
  //     signIn(auth.currentUser); //action creator
  //   } else {
  //     signOut(); //action creator
  //   }
  // };

  const onSignInClick = () => {
    // take to the login path to have the login screen revealed

    signIn();
  };

  const onSignOutClick = () => {
    signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button type="button" onClick={onSignOutClick}>
          Log Out
        </button>
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
