/* eslint-disable no-else-return */
/* eslint-disable no-console */
import React, { useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut, clearUser } from "../../actions";
import Dropdown from "../Dropdown";

const options = [
  <Link to="/login" className="profile__item">
    Log In
  </Link>,
  <Link to="/user/new" className="profile__item">
    Create Account
  </Link>,
];
// eslint-disable-next-line no-shadow
const UserAuth = ({ isSignedIn, signOut, clearUser }) => {
  const label = <i className="nav__item user circle outline icon" />;

  const onSignOutClick = () => {
    signOut();
    clearUser();
  };

  const renderAuthButton = () => {
    if (isSignedIn) {
      return (
        <Link to="/" className="ui button primary" onClick={onSignOutClick}>
          Log Out
        </Link>
      );
    } else {
      return <Dropdown label={label} options={options} />;
    }
  };

  return (
    <div className="auth__login menu" data-test="component-user-auth">
      {renderAuthButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signOut, clearUser })(UserAuth);
