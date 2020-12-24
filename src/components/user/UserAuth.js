/* eslint-disable no-else-return */
/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
// import Button from "../Button";

const UserAuth = () => {
  // const onAuthChange = (isSignedIn) => {
  //   if (isSignedIn) {
  //     signIn(auth.currentUser); //action creator
  //   } else {
  //     signOut(); //action creator
  //   }
  // };

  const onSignInClick = () => {
    // console.log("sign in click");

    signIn();
  };

  const onSignOutClick = () => {
    // console.log("sign out click");
    signOut();
  };

  const renderAuthButton = (isSignedIn) => {
    // console.log(isSignedIn);
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
        <button type="button" onClick={onSignInClick}>
          Log In
        </button>
      );
    }
  };

  return <div data-test="component-user-auth">{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  // console.log(state.auth.isSignedIn);
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(UserAuth);
